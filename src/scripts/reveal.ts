// Plates "print" into place once, as they enter the viewport.
// Content stays visible without JS or with reduced motion (see global.css).
const items = document.querySelectorAll<HTMLElement>('[data-reveal]');

if ('IntersectionObserver' in window && items.length) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      }
    },
    { rootMargin: '0px 0px -12% 0px' },
  );
  items.forEach((el) => io.observe(el));
} else {
  items.forEach((el) => el.classList.add('is-in'));
}
