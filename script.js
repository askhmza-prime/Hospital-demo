// Ahmed Clinic — landing page behaviour
// Kept intentionally small: this page is mostly static HTML/CSS.

document.addEventListener('DOMContentLoaded', () => {
  // Footer year, kept in sync automatically
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Hide the sticky mobile call/WhatsApp bar once the visitor reaches
  // the appointment section, since the same actions are already there.
  const appointmentSection = document.getElementById('appointment');
  const mobileCta = document.querySelector('.mobile-cta');

  if (appointmentSection && mobileCta && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          mobileCta.style.transform = entry.isIntersecting
            ? 'translateY(100%)'
            : 'translateY(0)';
        });
      },
      { threshold: 0.25 }
    );
    mobileCta.style.transition = 'transform 0.25s ease';
    observer.observe(appointmentSection);
  }
});
