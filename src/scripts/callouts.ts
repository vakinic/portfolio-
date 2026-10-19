// Signature interaction: pointing at a spec isolates that zone of the screenshot.
// Works with mouse (hover), keyboard (focus) and touch (tap toggles).
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');

document.querySelectorAll<HTMLElement>('[data-callouts]').forEach((root) => {
  const triggers = Array.from(root.querySelectorAll<HTMLButtonElement>('[data-target]'));
  const regions = Array.from(root.querySelectorAll<HTMLElement>('[data-region]'));
  const caption = root.querySelector<HTMLElement>('.plate__caption');
  const frame = root.querySelector<HTMLElement>('.plate__frame');
  const titles = new Map<string, string>();
  root.querySelectorAll<HTMLElement>('.co__item').forEach((item) => {
    titles.set(item.dataset.target ?? '', item.querySelector('.co__title')?.textContent ?? '');
  });

  let active: string | null = null;
  let pinned = false;

  function show(n: string | null) {
    active = n;
    regions.forEach((r) => r.classList.toggle('is-on', r.dataset.region === n));
    triggers.forEach((t) => t.setAttribute('aria-pressed', String(t.dataset.target === n)));
    if (caption) {
      caption.textContent = n ? `${n} — ${titles.get(n) ?? ''}` : '';
      caption.classList.toggle('is-on', Boolean(n));
    }
  }

  triggers.forEach((t) => {
    const n = t.dataset.target ?? null;
    t.addEventListener('pointerenter', (e) => {
      if (e.pointerType === 'mouse' && finePointer.matches && !pinned) show(n);
    });
    t.addEventListener('pointerleave', (e) => {
      if (e.pointerType === 'mouse' && finePointer.matches && !pinned) show(null);
    });
    t.addEventListener('focus', () => {
      if (!pinned) show(n);
    });
    t.addEventListener('blur', () => {
      if (!pinned) show(null);
    });
    t.addEventListener('click', () => {
      if (pinned && active === n) {
        pinned = false;
        show(null);
        return;
      }
      pinned = true;
      show(n);
      // On narrow screens the list sits below the image: bring the image back into view.
      if (t.classList.contains('co__item') && frame && !finePointer.matches) {
        const box = frame.getBoundingClientRect();
        if (box.bottom < 80 || box.top > window.innerHeight - 80) {
          const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
          frame.scrollIntoView({ block: 'center', behavior: reduce ? 'auto' : 'smooth' });
        }
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && active) {
      pinned = false;
      show(null);
    }
  });
  document.addEventListener('pointerdown', (e) => {
    if (pinned && !root.contains(e.target as Node)) {
      pinned = false;
      show(null);
    }
  });
});
