/* resume.js — Kartik Singh Bora */

document.addEventListener("DOMContentLoaded", () => {

  // ── Intersection Observer: reveal timeline items and project cards ──
  const revealEls = document.querySelectorAll(".timeline-item, .project-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // stagger delay based on sibling index
          const siblings = entry.target.parentElement
            ? [...entry.target.parentElement.children]
            : [];
          const idx = siblings.indexOf(entry.target);
          entry.target.style.transitionDelay = `${idx * 80}ms`;
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealEls.forEach((el) => observer.observe(el));


  // ── Skill tag hover glow on sidebar ──
  const skillTags = document.querySelectorAll(".skill-tag");
  skillTags.forEach((tag) => {
    tag.addEventListener("mouseenter", () => {
      tag.style.boxShadow = "0 0 14px rgba(0,255,208,0.35)";
    });
    tag.addEventListener("mouseleave", () => {
      tag.style.boxShadow = "";
    });
  });


  // ── Typing cursor effect on the tagline ──
  const taglineEl = document.querySelector(".tagline");
  if (taglineEl) {
    const originalText = taglineEl.textContent.trim();
    taglineEl.textContent = "";
    taglineEl.style.borderRight = "2px solid rgba(0,255,208,0.7)";

    let i = 0;
    const typeInterval = setInterval(() => {
      taglineEl.textContent = originalText.slice(0, i + 1);
      i++;
      if (i >= originalText.length) {
        clearInterval(typeInterval);
        // blink cursor then remove
        let blinks = 0;
        const blinkInterval = setInterval(() => {
          taglineEl.style.borderRight =
            blinks % 2 === 0
              ? "2px solid transparent"
              : "2px solid rgba(0,255,208,0.7)";
          blinks++;
          if (blinks > 5) {
            clearInterval(blinkInterval);
            taglineEl.style.borderRight = "none";
          }
        }, 400);
      }
    }, 28);
  }


  // ── Stats strip count-up animation ──
  const statNums = document.querySelectorAll(".stat-num");

  const countUp = (el) => {
    const raw = el.textContent.trim();
    const suffix = raw.replace(/[0-9]/g, "");    // e.g. "+" or "months"
    const target = parseInt(raw.replace(/\D/g, ""), 10);
    if (isNaN(target)) return;

    let current = 0;
    const step = Math.max(1, Math.floor(target / 40));
    const interval = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = current + suffix;
      if (current >= target) clearInterval(interval);
    }, 30);
  };

  const statsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          countUp(entry.target);
          statsObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  statNums.forEach((el) => statsObserver.observe(el));


  // ── Subtle mouse-parallax tilt on project cards ──
  const cards = document.querySelectorAll(".project-card");
  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      card.style.transform = `rotateY(${dx * 4}deg) rotateX(${-dy * 4}deg) scale(1.02)`;
      card.style.transition = "transform 0.1s ease";
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "rotateY(0) rotateX(0) scale(1)";
      card.style.transition = "transform 0.4s ease";
    });
  });

});