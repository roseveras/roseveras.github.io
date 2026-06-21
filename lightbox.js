/* ─────────────────────────────────────────────────────────
   LIGHTBOX — full screen image viewer with navigation
   Used on any page with a .gallery-grid (Puppets, Fabrication,
   Illustration, Rotting Girl stills). Works automatically:
   it finds every <img> inside .gallery-item elements on the
   page and wires them up. No per-page setup needed beyond
   including this script and the overlay markup (see README).
───────────────────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('lightboxOverlay');
  if (!overlay) return; // page has no lightbox markup, skip

  const imgEl = document.getElementById('lightboxImg');
  const counterEl = document.getElementById('lightboxCounter');
  const closeBtn = document.getElementById('lightboxClose');
  const prevBtn = document.getElementById('lightboxPrev');
  const nextBtn = document.getElementById('lightboxNext');

  // Collect every real image inside gallery items on this page,
  // in the order they appear. Placeholder boxes (no <img>) are skipped.
  const images = Array.from(document.querySelectorAll('.gallery-item img'));
  let currentIndex = 0;

  function openAt(index) {
    if (!images.length) return;
    currentIndex = index;
    updateImage();
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  function updateImage() {
    const img = images[currentIndex];
    imgEl.src = img.src;
    imgEl.alt = img.alt || '';
    counterEl.textContent = `${currentIndex + 1} / ${images.length}`;
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
  }

  // Click any gallery image to open the lightbox at that image
  images.forEach((img, index) => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => openAt(index));
  });

  // Close interactions: click the image itself, click the X, or press Escape
  imgEl.addEventListener('click', close);
  closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) close(); // click on dark background also closes
  });

  // Arrow buttons
  nextBtn.addEventListener('click', (e) => { e.stopPropagation(); showNext(); });
  prevBtn.addEventListener('click', (e) => { e.stopPropagation(); showPrev(); });

  // Keyboard support
  document.addEventListener('keydown', (e) => {
    if (!overlay.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowRight') showNext();
    if (e.key === 'ArrowLeft') showPrev();
  });
});
