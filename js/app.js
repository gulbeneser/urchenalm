/* ============ PAGE ROUTER ============ */
const VALID_PAGES = ['home','haus','zimmer','zimmer-doppel','zimmer-dreibett','zimmer-vierbett','apartments','apt-2-4','apt-4-6','pauschalen','winter','sommer','anreise','ferienhaus','kontakt','kalkulator'];

function navigateTo(pageName, push = true) {
  if (!VALID_PAGES.includes(pageName)) pageName = 'home';

  document.querySelectorAll('.page').forEach(p => {
    p.classList.remove('active', 'entered');
  });

  const target = document.getElementById('page-' + pageName);
  if (target) {
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

document.addEventListener('click', (e) => {
  const link = e.target.closest('[data-link]');
  if (link) {
    e.preventDefault();
    navigateTo(link.dataset.link);
  }
});

window.addEventListener('popstate', () => {
  const page = (location.hash || '#home').slice(1) || 'home';
  navigateTo(page, false);
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
