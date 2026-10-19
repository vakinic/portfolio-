// Signature interaction: pointing at a feature isolates that zone of the screenshot.
// Works with mouse (hover), keyboard (focus) and touch (tap toggles).
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');

document.querySelectorAll<HTMLElement>('[data-callouts]').forEach((root) => {
  if (root.dataset.bound) return;
  root.dataset.bound = 'true';

  const triggers = Array.from(root.querySelectorAll<HTMLButtonElement>('[data-target]'));
  const regions = Array.from(root.querySelectorAll<HTMLElement>('[data-region]'));
  const caption = root.querySelector<HTMLElement>('.plate__caption');
  const frame = root.querySelector<HTMLElement>('.plate__frame');
  const texts = new Map<string, { title: string; detail: string }>();
  root.querySelectorAll<HTMLElement>('.co__item').forEach((item) => {
    texts.set(item.dataset.target ?? '', {
      title: item.querySelector('.co__title')?.textContent ?? '',
      detail: item.querySelector('.co__detail')?.textContent ?? '',
    });
  });

  let active: string | null = null;
  let pinned = false;

  function renderCaption(n: string | null) {
    if (!caption) return;
    caption.replaceChildren();
    if (n) {
      const t = texts.get(n);
      const strong = document.createElement('b');
      strong.textContent = `${n}. ${t?.title ?? ''}`;
      caption.append(strong, document.createTextNode(t?.detail ?? ''));
    } else if (caption.dataset.hint) {
      caption.textContent = caption.dataset.hint;
    }
    caption.classList.toggle('is-on', Boolean(n));
  }

  function show(n: string | null) {
    active = n;
    regions.forEach((r) => r.classList.toggle('is-on', r.dataset.region === n));
    triggers.forEach((t) => t.setAttribute('aria-pressed', String(t.dataset.target === n)));
    renderCaption(n);
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
      // When the list sits below the image on narrow screens, bring the image back into view.
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
