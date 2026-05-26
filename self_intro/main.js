// ── 平滑捲動 ──
function goTo(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const navH = document.querySelector('nav').offsetHeight;
  const y = el.getBoundingClientRect().top + window.pageYOffset - navH;
  window.scrollTo({ top: y, behavior: 'smooth' });
}

// ── 所有帶 data-target 的元素綁定捲動 ──
document.querySelectorAll('[data-target]').forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault();
    goTo(el.dataset.target);
  });
});

// ── Nav active 狀態 ──
function updateNav() {
  const navH = document.querySelector('nav').offsetHeight;
  const sections = document.querySelectorAll('section');
  let current = sections[0].id;
  sections.forEach(sec => {
    if (window.pageYOffset >= sec.offsetTop - navH - 100) {
      current = sec.id;
    }
  });
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.dataset.section === current);
  });
}

window.addEventListener('scroll', updateNav, { passive: true });
updateNav();

// ── Scroll reveal ──
const revealEls = document.querySelectorAll(
  '.stat-card, .skill-group, .project-card, .about-text, .about-stats, ' +
  '.contact-inner, .quickcard, .achieve-item, .fursona-layout'
);
revealEls.forEach(el => el.classList.add('reveal'));

const revealObs = new IntersectionObserver((entries, obs) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      obs.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

revealEls.forEach(el => revealObs.observe(el));
