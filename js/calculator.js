/* ============ PREISKALKULATOR ============ */

let PRICE_DATA = null;

async function loadPriceData() {
  if (PRICE_DATA) return PRICE_DATA;
  const r = await fetch('data/prices.json');
  PRICE_DATA = await r.json();
  return PRICE_DATA;
}

function parseDate(str) {
  // str: "YYYY-MM-DD"
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

function formatEur(n) {
  return '€ ' + n.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

function formatEurInt(n) {
  return '€ ' + String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
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

    // Group consecutive nights in same season
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

function renderResult(result, accom) {
  const box = document.getElementById('calc-result');
  if (!box) return;

  if (result.error) {
    box.innerHTML = `
      <div class="calc-error">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
        ${result.error}
      </div>`;
    box.classList.add('visible');
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

  const infoLine = result.pricingMode === 'perPerson'
    ? `Preise pro Person · ${result.persons} ${result.persons === 1 ? 'Person' : 'Personen'} · inkl. Frühstücksbuffet`
    : `Gesamtpreis für die Unterkunft · ${result.persons} Personen · ohne Verpflegung · zzgl. Endreinigung`;

  box.innerHTML = `
    <div class="calc-result-inner">
      <div class="calc-result-header">
        <div class="calc-result-accom">${accom.label}</div>
        <div class="calc-result-nights">${result.totalNights} Nächte</div>
      </div>
      <div class="calc-segments">${segRows}</div>
      ${extrasRows ? `<div class="calc-extras">${extrasRows}</div>` : ''}
      <div class="calc-total-row">
        <span>Gesamtpreis</span>
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
  box.classList.add('visible');
}

async function initCalculator() {
  const form = document.getElementById('calc-form');
  if (!form) return;

  const data = await loadPriceData();

  // Render accommodation cards
  const accomGrid = document.getElementById('calc-accom-grid');
  if (accomGrid) {
    accomGrid.innerHTML = data.accommodations.map(a => `
      <label class="calc-accom-card" data-id="${a.id}">
        <input type="radio" name="calc-accom" value="${a.id}" ${a.id === 'doppelzimmer' ? 'checked' : ''}>
        <div class="calc-accom-inner">
          <div class="calc-accom-type-badge">${a.type === 'zimmer' ? 'Zimmer' : 'Ferienwohnung'}</div>
          <div class="calc-accom-name">${a.label}</div>
          <div class="calc-accom-sub">${a.sublabel}</div>
        </div>
      </label>`).join('');

    // Mark first card active
    accomGrid.querySelector('.calc-accom-card')?.classList.add('selected');

    accomGrid.addEventListener('change', (e) => {
      if (e.target.name === 'calc-accom') {
        accomGrid.querySelectorAll('.calc-accom-card').forEach(c => c.classList.remove('selected'));
        e.target.closest('.calc-accom-card').classList.add('selected');
        updatePersonsRange(data);
        clearResult();
      }
    });
  }

  updatePersonsRange(data);

  // Set default dates
  const today = new Date();
  const nextWeek = addDays(today, 7);
  const nextFortnight = addDays(today, 14);
  const checkinInput = document.getElementById('calc-checkin');
  const checkoutInput = document.getElementById('calc-checkout');
  if (checkinInput) checkinInput.value = dateStr(nextWeek);
  if (checkoutInput) checkoutInput.value = dateStr(nextFortnight);

  if (checkinInput) {
    checkinInput.addEventListener('change', () => {
      // Auto-advance checkout if needed
      if (checkoutInput) {
        const ci = parseDate(checkinInput.value);
        const co = parseDate(checkoutInput.value);
        if (co <= ci) {
          checkoutInput.value = dateStr(addDays(ci, 7));
        }
        checkoutInput.min = dateStr(addDays(ci, 1));
      }
      clearResult();
    });
  }
  if (checkoutInput) checkoutInput.addEventListener('change', clearResult);

  const personsInput = document.getElementById('calc-persons');
  if (personsInput) personsInput.addEventListener('change', clearResult);

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    await runCalculation(data);
  });
}

function updatePersonsRange(data) {
  const selected = document.querySelector('input[name="calc-accom"]:checked');
  if (!selected) return;
  const accom = data.accommodations.find(a => a.id === selected.value);
  if (!accom) return;

  const personsInput = document.getElementById('calc-persons');
  const personsDisplay = document.getElementById('calc-persons-display');
  if (!personsInput) return;

  personsInput.min = accom.minPersons;
  personsInput.max = accom.maxPersons;
  const cur = parseInt(personsInput.value);
  if (cur < accom.minPersons) personsInput.value = accom.minPersons;
  if (cur > accom.maxPersons) personsInput.value = accom.maxPersons;

  if (personsDisplay) {
    personsDisplay.textContent = `${accom.minPersons} – ${accom.maxPersons} Personen`;
  }
}

function clearResult() {
  const box = document.getElementById('calc-result');
  if (box) {
    box.classList.remove('visible');
    box.innerHTML = '';
  }
}

async function runCalculation(data) {
  const selected = document.querySelector('input[name="calc-accom"]:checked');
  if (!selected) return;
  const accom = data.accommodations.find(a => a.id === selected.value);
  if (!accom) return;

  const checkinVal = document.getElementById('calc-checkin')?.value;
  const checkoutVal = document.getElementById('calc-checkout')?.value;
  const personsVal = parseInt(document.getElementById('calc-persons')?.value || '2');

  if (!checkinVal || !checkoutVal) {
    renderResult({ error: 'Bitte Anreise- und Abreisedatum wählen.' }, accom);
    return;
  }

  const checkin = parseDate(checkinVal);
  const checkout = parseDate(checkoutVal);

  const result = calcPrice(accom, personsVal, checkin, checkout, data.seasons);
  renderResult(result, accom);
}

document.addEventListener('DOMContentLoaded', () => {
  initCalculator();
});
