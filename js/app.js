/* ============ PAGE ROUTER ============ */
const VALID_PAGES = ['home','haus','zimmer','zimmer-doppel','zimmer-dreibett','zimmer-vierbett','apartments','apt-2-4','apt-4-6','pauschalen','winter','sommer','anreise','ferienhaus','kontakt','kalkulator'];
let transitionTimer = null;

function prepareEditorialReveal(target) {
  if (!target) return;
  const revealItems = target.querySelectorAll('h1, h2, h3, p, li, .page-num, .page-breadcrumb, .hero-meta, .hero-cta, .qf-eyebrow, .section-label, .teaser-num, .room-num, .apt-num, .dm-side-num, .calc-widget-head, .calc-step, .footer-col, .footer-tagline');
  revealItems.forEach((item, index) => {
    if (!item.hasAttribute('data-reveal')) item.setAttribute('data-reveal', '');
    item.style.setProperty('--reveal-index', String(Math.min(index, 12)));
  });

  const imageItems = target.querySelectorAll('.hero-image, .teaser-img, .room-img, .apt-img, .haus-visual > div, .detail-hero, .season-image, .pcard-img, .fh-image, .sommer-image, .anreise-map, .contact-visual');
  imageItems.forEach((item, index) => {
    if (!item.hasAttribute('data-image-reveal')) item.setAttribute('data-image-reveal', '');
    item.style.setProperty('--reveal-index', String(Math.min(index + 1, 10)));
  });
}

function performNavigate(pageName, push = true) {
  if (!VALID_PAGES.includes(pageName)) pageName = 'home';

  document.querySelectorAll('.page').forEach(p => {
    p.classList.remove('active', 'entered');
  });

  const target = document.getElementById('page-' + pageName);
  if (target) {
    prepareEditorialReveal(target);
    target.classList.add('active');
    requestAnimationFrame(() => {
      requestAnimationFrame(() => target.classList.add('entered'));
    });
  }

  document.querySelectorAll('[data-link]').forEach(link => {
    link.classList.toggle('active', link.dataset.link === pageName);
  });

  try { window.scrollTo({ top: 0, behavior: 'instant' }); } catch(e) {}

  if (push) {
    try {
      history.pushState({ page: pageName }, '', '#' + pageName);
    } catch(e) {
      location.hash = pageName;
    }
  }

  document.getElementById('menuOverlay')?.classList.remove('open');
}

function navigateTo(pageName, push = true, withTransition = false) {
  clearTimeout(transitionTimer);

  if (!withTransition || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    performNavigate(pageName, push);
    return;
  }

  document.body.classList.add('is-transitioning');
  transitionTimer = window.setTimeout(() => performNavigate(pageName, push), 590);
  window.setTimeout(() => document.body.classList.remove('is-transitioning'), 1450);
}

function setupEditorialChrome() {
  if (!document.querySelector('.page-transition')) {
    const veil = document.createElement('div');
    veil.className = 'page-transition';
    veil.setAttribute('aria-hidden', 'true');
    veil.innerHTML = '<span>Urchenhof</span>';
    document.body.appendChild(veil);
  }

  if (!window.matchMedia('(pointer: fine)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const cursor = document.createElement('div');
  cursor.className = 'editorial-cursor';
  cursor.setAttribute('aria-hidden', 'true');
  document.body.appendChild(cursor);

  window.addEventListener('pointermove', (e) => {
    cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
  }, { passive: true });

  document.addEventListener('pointerover', (e) => {
    if (e.target.closest('a, button, input, select, textarea, [data-link], .calc-accom-card')) cursor.classList.add('is-active');
  });

  document.addEventListener('pointerout', (e) => {
    if (e.target.closest('a, button, input, select, textarea, [data-link], .calc-accom-card')) cursor.classList.remove('is-active');
  });
}

setupEditorialChrome();

document.addEventListener('click', (e) => {
  const link = e.target.closest('[data-link]');
  if (link) {
    e.preventDefault();
    const nextPage = link.dataset.link;
    const currentPage = document.querySelector('.page.active')?.dataset.page;
    navigateTo(nextPage, true, currentPage && currentPage !== nextPage);
  }
});

window.addEventListener('popstate', () => {
  const page = (location.hash || '#home').slice(1) || 'home';
  navigateTo(page, false, true);
});

const initialPage = (location.hash || '#home').slice(1) || 'home';
navigateTo(initialPage, false);

/* ============ TOPBAR SCROLL ============ */
const topbar = document.querySelector('.topbar');
window.addEventListener('scroll', () => {
  topbar?.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

/* ============ YEAR ============ */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ============ MOBILE MENU ============ */
const menu = document.getElementById('menuOverlay');
const menuClose = document.getElementById('menuClose');
const menuToggle = document.querySelector('.nav-toggle');
menuToggle?.addEventListener('click', () => menu?.classList.add('open'));
menuClose?.addEventListener('click', () => menu?.classList.remove('open'));

/* ============ FAQ ACCORDION ============ */
document.addEventListener('click', (e) => {
  const q = e.target.closest('.faq-q');
  if (q) q.parentElement.classList.toggle('open');
});

/* ============ PERSONS STEPPER ============ */
document.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-step]');
  if (!btn) return;
  const targetId = btn.dataset.step;
  const root = btn.closest('[data-calc-widget], .page, body') || document;
  const input = root.querySelector(`#${CSS.escape(targetId)}`) || document.getElementById(targetId);
  if (!input) return;
  const delta = btn.dataset.dir === 'up' ? 1 : -1;
  const next = Math.min(Math.max(Number(input.value) + delta, Number(input.min)), Number(input.max));
  input.value = next;
  input.dispatchEvent(new Event('change', { bubbles: true }));
  const display = root.querySelector(`#${CSS.escape(targetId)}-val`) || document.getElementById(targetId + '-val');
  if (display) display.textContent = next;
});
