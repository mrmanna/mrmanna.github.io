/* mrmanna.github.io — site.js */

(function () {
  // ── Theme toggle ─────────────────────────────────────────────
  var html   = document.documentElement;
  var btn    = document.getElementById('theme-toggle');

  function applyTheme(theme) {
    if (theme === 'dark') {
      html.setAttribute('data-theme', 'dark');
    } else {
      html.removeAttribute('data-theme');
    }
    if (btn) btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  }

  if (btn) {
    btn.addEventListener('click', function () {
      var isDark = html.getAttribute('data-theme') === 'dark';
      var next = isDark ? 'light' : 'dark';
      applyTheme(next);
      try { localStorage.setItem('theme', next); } catch(e) {}
    });
  }

  // Ensure the button label reflects the initial state (set by inline script)
  applyTheme(html.getAttribute('data-theme') === 'dark' ? 'dark' : 'light');

  // ── Mobile nav toggle ────────────────────────────────────────
  var toggle = document.querySelector('.nav-toggle');
  var nav    = document.querySelector('#primary-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ── Footer year ──────────────────────────────────────────────
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
