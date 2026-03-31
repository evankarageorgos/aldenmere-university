/* ═══════════════════════════════════════════════════════
   Aldenmere University — Shared JS
   ═══════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Navbar scroll transform ─────────────────────── */
  const nav     = document.getElementById('mainNav');
  const backTop = document.getElementById('backTop');

  if (nav) {
    // Pages without a full-screen hero start with opaque nav
    const hasHero = document.getElementById('hero');
    if (!hasHero) nav.classList.add('opaque');

    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      if (hasHero) {
        nav.classList.toggle('scrolled', y > 80);
      }
      if (backTop) backTop.classList.toggle('visible', y > 500);
    }, { passive: true });
  }

  /* ── Reveal on scroll ────────────────────────────── */
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -36px 0px' });
    reveals.forEach(el => observer.observe(el));
  }

  /* ── Sub-nav active link tracking ───────────────── */
  const subNavLinks = document.querySelectorAll('.sub-nav-link[href^="#"]');
  if (subNavLinks.length) {
    const sections = [...subNavLinks].map(l => document.querySelector(l.getAttribute('href'))).filter(Boolean);

    const sectionObs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          subNavLinks.forEach(l => l.classList.remove('active'));
          const active = document.querySelector(`.sub-nav-link[href="#${e.target.id}"]`);
          if (active) active.classList.add('active');
        }
      });
    }, { threshold: 0.35, rootMargin: '-60px 0px 0px 0px' });

    sections.forEach(s => sectionObs.observe(s));
  }

  /* ── Back to top ─────────────────────────────────── */
  if (backTop) {
    backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  /* ── Mark active nav page ────────────────────────── */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('#mainNav .nav-link[data-page]').forEach(link => {
    if (link.dataset.page === currentPage) link.classList.add('active-page');
  });

  /* ── Filter buttons ──────────────────────────────── */
  document.querySelectorAll('[data-filter-group]').forEach(group => {
    const target = group.dataset.filterGroup;
    const items  = document.querySelectorAll(`[data-filter-target="${target}"]`);
    group.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        group.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const val = btn.dataset.filter;
        items.forEach(item => {
          if (val === 'all' || item.dataset.filterVal === val || (item.dataset.filterVal || '').split(' ').includes(val)) {
            item.style.display = '';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  });

  /* ── Search filter ───────────────────────────────── */
  document.querySelectorAll('[data-search-target]').forEach(input => {
    const targetClass = input.dataset.searchTarget;
    input.addEventListener('input', () => {
      const q = input.value.toLowerCase().trim();
      document.querySelectorAll(`.${targetClass}`).forEach(item => {
        const text = item.dataset.searchText || item.textContent.toLowerCase();
        item.style.display = (!q || text.includes(q)) ? '' : 'none';
      });
    });
  });

});
