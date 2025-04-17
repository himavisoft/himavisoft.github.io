document.addEventListener("DOMContentLoaded", () => {
  // Initialize intersection observer for timeline items
  const timelineObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.2,
      rootMargin: "-50px",
    }
  );

  // Observe all timeline items
  document.querySelectorAll(".timeline-item").forEach((item) => {
    timelineObserver.observe(item);
  });

  // Add subtle hover effects for timeline items
  document.querySelectorAll(".timeline-item").forEach((item) => {
    item.addEventListener("mouseenter", () => {
      const number = item.querySelector(".timeline-number");
      const content = item.querySelector(".timeline-content");

      number.style.backgroundColor = "#2563eb";
      number.style.color = "#ffffff";
      number.style.transform = "scale(1.1)";

      content.style.transform = "translateY(-5px)";
      content.style.boxShadow = "0 10px 15px -3px rgba(0, 0, 0, 0.1)";
    });

    item.addEventListener("mouseleave", () => {
      const number = item.querySelector(".timeline-number");
      const content = item.querySelector(".timeline-content");

      number.style.backgroundColor = "";
      number.style.color = "";
      number.style.transform = "";

      content.style.transform = "";
      content.style.boxShadow = "";
    });
  });

  // Add subtle parallax effect to security banner
  const securityBanner = document.querySelector(".security-banner");
  if (securityBanner) {
    window.addEventListener("scroll", () => {
      const rect = securityBanner.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const scrolled = window.pageYOffset;
        const speed = 0.05;
        const yPos = -(scrolled * speed);
        securityBanner.style.transform = `translateY(${yPos}px)`;
      }
    });
  }

  // Add initial active state to first timeline item
  const firstItem = document.querySelector(".timeline-item");
  if (firstItem) {
    firstItem.classList.add("visible");
  }

  // Add smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // Add sequential appearance animation for security tags
  const securityTags = document.querySelectorAll(".security-tags .tag");
  securityTags.forEach((tag, index) => {
    tag.style.opacity = "0";
    tag.style.transform = "translateY(10px)";

    setTimeout(() => {
      tag.style.transition = "all 0.3s ease";
      tag.style.opacity = "1";
      tag.style.transform = "translateY(0)";
    }, 300 + index * 100);
  });
});
