document.addEventListener("DOMContentLoaded", () => {
  const apkLink = "downloads/AgniSpark.apk";

  // Keep all download buttons pointing at the same relative APK path.
  document.querySelectorAll('a[href*="AgniSpark.apk"]').forEach((link) => {
    link.href = apkLink;
  });

  // Smoothly reveal cards as they enter the viewport.
  const items = document.querySelectorAll(".feature-card, .step, .details-card, .faq details");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    items.forEach((item) => observer.observe(item));
  }
});
