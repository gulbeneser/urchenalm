/* ============ PREISKALKULATOR ============ */

let PRICE_DATA = null;
let CALC_UID = 0;

async function loadPriceData() {
  if (PRICE_DATA) return PRICE_DATA;
  const r = await fetch('data/prices.json');
  PRICE_DATA = await r.json();
  return PRICE_DATA;
}

function parseDate(str) {
  const [y, m, d] = str.split('-').map(Number);
  return new Date(y, m - 1, d);
}

function dateStr(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function addDays(date, n) {
  const d = new Date(date);
  d.setDate(d.getDate() + n);
  return d;
}

function findSeason(date, seasons) {
  const ds = dateStr(date);
  return seasons.find(s => ds >= s.from && ds <= s.to) || null;
}

function formatEurInt(n) {
  return '€\u202f' + String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

function calcPrice(accom, persons, checkin, checkout, seasons) {
  const nights = Math.round((checkout - checkin) / 86400000);
  if (nights <= 0) return { error: 'Abreisedatum muss nach dem Anreisedatum liegen.' };
  if (nights > 365) return { error: 'Maximaler Aufenthalt: 365 Nächte.' };

  const personKey = String(persons);
  const segments = [];
  let totalNights = 0;
  let totalPrice = 0;
  let hasClosed = false;

  let cur = new Date(checkin);
  while (cur < checkout) {
    const season = findSeason(cur, seasons);
    if (!season) {
      cur = addDays(cur, 1);
      continue;
    }
    if (season.closed) {
      hasClosed = true;
      break;
    }
    const priceTable = accom.prices[season.id];
    if (!priceTable) {
      hasClosed = true;
      break;
    }
    const pricePerNight = priceTable[personKey];
    if (pricePerNight === undefined) {
      return { error: `Für ${persons} Personen ist kein Preis in dieser Saison verfügbar.` };
    }

    let segEnd = addDays(cur, 1);
    while (segEnd < checkout) {
      const nextSeason = findSeason(segEnd, seasons);
      if (!nextSeason || nextSeason.id !== season.id) break;
      segEnd = addDays(segEnd, 1);
    }

    const segNights = Math.round((segEnd - cur) / 86400000);
    const segTotal = accom.pricingMode === 'perPerson'
      ? pricePerNight * persons * segNights
      : pricePerNight * segNights;

    segments.push({
      seasonLabel: season.label,
      seasonTag: season.tag || '',
      nights: segNights,
      pricePerNight,
      segTotal
    });

    totalNights += segNights;
    totalPrice += segTotal;
    cur = segEnd;
  }

  if (hasClosed) {
    return { error: 'Ihr gewählter Zeitraum fällt ganz oder teilweise in eine Schließungszeit.' };
  }
  if (segments.length === 0) {
    return { error: 'Für diesen Zeitraum sind keine Preise verfügbar.' };
  }

  const extras = accom.endreinigung ? [{ label: 'Endreinigung', amount: accom.endreinigung }] : [];
  const extrasTotal = extras.reduce((s, e) => s + e.amount, 0);

  return {
    ok: true,
    segments,
    totalNights,
    baseTotal: totalPrice,
    extras,
    grandTotal: totalPrice + extrasTotal,
    pricingMode: accom.pricingMode,
    persons
  };
}

function getCalcElements(widget) {
  return {
    form: widget.querySelector('.calc-form'),
    accomGrid: widget.querySelector('.calc-accom-grid'),
    checkinInput: widget.querySelector('.calc-checkin'),
    checkoutInput: widget.querySelector('.calc-checkout'),
    personsInput: widget.querySelector('.calc-persons-hidden'),
    personsDisplay: widget.querySelector('.calc-persons-range'),
    personsVal: widget.querySelector('.calc-stepper-val'),
    resultBox: widget.querySelector('.calc-result')
  };
}

function renderResult(widget, result, accom) {
  const { resultBox } = getCalcElements(widget);
  if (!resultBox) return;

  if (result.error) {
    resultBox.innerHTML = `
      <div class="calc-error">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
        ${result.error}
      </div>`;
    resultBox.classList.add('visible');
    return;
  }

  const segRows = result.segments.map(seg => {
    const ppLabel = result.pricingMode === 'perPerson'
      ? `${formatEurInt(seg.pricePerNight)} p.P./Nacht`
      : `${formatEurInt(seg.pricePerNight)}/Nacht`;
    return `
      <div class="calc-seg-row">
        <div class="calc-seg-info">
          <span class="calc-seg-season">${seg.seasonLabel}</span>
          <span class="calc-seg-nights">${seg.nights} Nacht${seg.nights > 1 ? 'e' : ''} × ${ppLabel}</span>
        </div>
        <div class="calc-seg-total">${formatEurInt(seg.segTotal)}</div>
      </div>`;
  }).join('');

  const extrasRows = result.extras.map(e => `
    <div class="calc-extra-row">
      <span>${e.label}</span>
      <span>${formatEurInt(e.amount)}</span>
    </div>`).join('');

  const personLabel = result.persons === 1 ? 'Person' : 'Personen';
  const hasExtras = result.extras.length > 0;
  const infoLine = result.pricingMode === 'perPerson'
    ? `Preise pro Person · ${result.persons} ${personLabel} · inkl. Frühstücksbuffet`
    : `Gesamtpreis für die Unterkunft · ${result.persons} ${personLabel} · ohne Verpflegung${hasExtras ? ' · inkl. Endreinigung' : ''}`;
  const totalLabel = hasExtras ? 'Gesamtpreis inkl. Endreinigung' : 'Gesamtpreis';

  resultBox.innerHTML = `
    <div class="calc-result-inner">
      <div class="calc-result-header">
        <div class="calc-result-accom">${accom.label}</div>
        <div class="calc-result-nights">${result.totalNights} Nächte</div>
      </div>
      <div class="calc-segments">${segRows}</div>
      ${extrasRows ? `<div class="calc-extras">${extrasRows}</div>` : ''}
      <div class="calc-total-row">
        <span>${totalLabel}</span>
        <span class="calc-grand-total">${formatEurInt(result.grandTotal)}</span>
      </div>
      <div class="calc-info-line">${infoLine}</div>
      <div class="calc-cta-row">
        <a href="mailto:info@pension-urchenhof.at?subject=Anfrage%20${encodeURIComponent(accom.label)}" class="calc-cta-btn">
          Jetzt anfragen →
        </a>
        <a data-link="${accom.page}" class="calc-cta-link">Details ansehen →</a>
      </div>
    </div>`;
  resultBox.classList.add('visible');
}

function renderCalculatorShell(widget, data, uid) {
  const lockTo = widget.dataset.calcLock === 'true' ? widget.dataset.calcDefault : '';
  const defaultAccom = widget.dataset.calcDefault || 'doppelzimmer';
  const title = widget.dataset.calcTitle || 'Preis schnell berechnen';
  const text = widget.dataset.calcText || 'Unterkunft, Zeitraum und Personenzahl wählen – der Richtpreis wird sofort aus den Saisontarifen berechnet.';
  const accommodations = lockTo
    ? data.accommodations.filter(a => a.id === lockTo)
    : data.accommodations;

  widget.innerHTML = `
    <div class="calc-widget-head">
      <div class="calc-widget-eyebrow">Preisrechner</div>
      <h2>${title}</h2>
      <p>${text}</p>
    </div>
    <form class="calc-form" autocomplete="off">
      <div class="calc-step">
        <div class="calc-step-label"><span class="calc-step-num">01</span>Unterkunft wählen</div>
        <div class="calc-accom-grid"></div>
      </div>
      <div class="calc-step">
        <div class="calc-step-label"><span class="calc-step-num">02</span>Reisedaten &amp; Personen</div>
        <div class="calc-dates-row">
          <div class="calc-field">
            <label class="calc-label" for="${uid}-checkin">Anreise</label>
            <input type="date" id="${uid}-checkin" class="calc-input calc-checkin" required>
          </div>
          <div class="calc-field-sep">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </div>
          <div class="calc-field">
            <label class="calc-label" for="${uid}-checkout">Abreise</label>
            <input type="date" id="${uid}-checkout" class="calc-input calc-checkout" required>
          </div>
          <div class="calc-field calc-persons-field">
            <label class="calc-label">Personen</label>
            <div class="calc-stepper">
              <button type="button" class="calc-step-btn" data-step="${uid}-persons" data-dir="down">−</button>
              <span id="${uid}-persons-val" class="calc-stepper-val">2</span>
              <button type="button" class="calc-step-btn" data-step="${uid}-persons" data-dir="up">+</button>
              <input type="number" id="${uid}-persons" class="calc-persons-hidden" value="2" min="1" max="6">
            </div>
            <div class="calc-persons-range">1 – 2 Personen</div>
          </div>
        </div>
      </div>
      <div class="calc-submit-row">
        <button type="submit" class="calc-submit-btn">
          Preis berechnen
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
      </div>
    </form>
    <div class="calc-result"></div>`;

  const { accomGrid } = getCalcElements(widget);
  accomGrid.innerHTML = accommodations.map(a => `
    <label class="calc-accom-card" data-id="${a.id}">
      <input type="radio" name="${uid}-accom" value="${a.id}" ${a.id === defaultAccom ? 'checked' : ''}>
      <div class="calc-accom-inner">
        <div class="calc-accom-type-badge">${a.type === 'zimmer' ? 'Zimmer' : 'Ferienwohnung'}</div>
        <div class="calc-accom-name">${a.label}</div>
        <div class="calc-accom-sub">${a.sublabel}</div>
      </div>
    </label>`).join('');
  const checked = accomGrid.querySelector('input:checked') || accomGrid.querySelector('input');
  if (checked) {
    checked.checked = true;
    checked.closest('.calc-accom-card')?.classList.add('selected');
  }
}

function selectedAccommodation(widget, data) {
  const selected = widget.querySelector('.calc-accom-card input:checked');
  if (!selected) return null;
  return data.accommodations.find(a => a.id === selected.value) || null;
}

function updatePersonsRange(widget, data) {
  const accom = selectedAccommodation(widget, data);
  if (!accom) return;

  const { personsInput, personsDisplay, personsVal } = getCalcElements(widget);
  if (!personsInput) return;

  personsInput.min = accom.minPersons;
  personsInput.max = accom.maxPersons;
  const cur = parseInt(personsInput.value, 10);
  if (cur < accom.minPersons) personsInput.value = accom.minPersons;
  if (cur > accom.maxPersons) personsInput.value = accom.maxPersons;
  if (personsVal) personsVal.textContent = personsInput.value;
  if (personsDisplay) personsDisplay.textContent = `${accom.minPersons} – ${accom.maxPersons} Personen`;
}

function clearResult(widget) {
  const { resultBox } = getCalcElements(widget);
  if (resultBox) {
    resultBox.classList.remove('visible');
    resultBox.innerHTML = '';
  }
}

function runCalculation(widget, data) {
  const accom = selectedAccommodation(widget, data);
  if (!accom) return;

  const { checkinInput, checkoutInput, personsInput } = getCalcElements(widget);
  const checkinVal = checkinInput?.value;
  const checkoutVal = checkoutInput?.value;
  const personsVal = parseInt(personsInput?.value || '2', 10);

  if (!checkinVal || !checkoutVal) {
    renderResult(widget, { error: 'Bitte Anreise- und Abreisedatum wählen.' }, accom);
    return;
  }

  const result = calcPrice(accom, personsVal, parseDate(checkinVal), parseDate(checkoutVal), data.seasons);
  renderResult(widget, result, accom);
}

async function initCalculatorWidget(widget) {
  if (widget.dataset.calcReady === 'true') return;
  widget.dataset.calcReady = 'true';

  const data = await loadPriceData();
  const uid = `calc-${++CALC_UID}`;
  renderCalculatorShell(widget, data, uid);

  const { form, accomGrid, checkinInput, checkoutInput, personsInput } = getCalcElements(widget);
  updatePersonsRange(widget, data);

  const today = new Date();
  const nextWeek = addDays(today, 7);
  const nextFortnight = addDays(today, 14);
  if (checkinInput) checkinInput.value = dateStr(nextWeek);
  if (checkoutInput) {
    checkoutInput.value = dateStr(nextFortnight);
    checkoutInput.min = dateStr(addDays(nextWeek, 1));
  }

  accomGrid?.addEventListener('change', (e) => {
    if (e.target.matches('input[type="radio"]')) {
      accomGrid.querySelectorAll('.calc-accom-card').forEach(c => c.classList.remove('selected'));
      e.target.closest('.calc-accom-card')?.classList.add('selected');
      updatePersonsRange(widget, data);
      clearResult(widget);
    }
  });

  checkinInput?.addEventListener('change', () => {
    if (checkoutInput) {
      const ci = parseDate(checkinInput.value);
      const co = parseDate(checkoutInput.value);
      if (co <= ci) checkoutInput.value = dateStr(addDays(ci, 7));
      checkoutInput.min = dateStr(addDays(ci, 1));
    }
    clearResult(widget);
  });
  checkoutInput?.addEventListener('change', () => clearResult(widget));
  personsInput?.addEventListener('change', () => {
    updatePersonsRange(widget, data);
    clearResult(widget);
  });

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    runCalculation(widget, data);
  });
}

function initCalculators() {
  document.querySelectorAll('[data-calc-widget]').forEach(initCalculatorWidget);
}

document.addEventListener('DOMContentLoaded', initCalculators);
