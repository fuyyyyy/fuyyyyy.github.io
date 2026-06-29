document.body.classList.add("js-ready");

const topNav = document.querySelector(".top-nav");
const sections = [...document.querySelectorAll("main .section")];
const navLinks = [...document.querySelectorAll(".nav-links a")];

const updateNavState = () => {
  if (topNav) {
    topNav.classList.toggle("is-scrolled", window.scrollY > 8);
  }
};

updateNavState();
window.addEventListener("scroll", updateNavState, { passive: true });

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  sections.forEach((section) => revealObserver.observe(section));

  const activeObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) {
        return;
      }

      navLinks.forEach((link) => {
        link.classList.toggle(
          "is-active",
          link.getAttribute("href") === `#${visible.target.id}`
        );
      });
    },
    {
      rootMargin: "-28% 0px -55% 0px",
      threshold: [0.1, 0.3, 0.6],
    }
  );

  sections.forEach((section) => activeObserver.observe(section));
} else {
  sections.forEach((section) => section.classList.add("is-visible"));
}
