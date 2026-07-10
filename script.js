document.body.classList.add("js-ready");

const topNav = document.querySelector(".top-nav");
const sections = [...document.querySelectorAll("main .section")];
const navLinks = [...document.querySelectorAll(".nav-links a")];

const updateNavState = () => {
  if (topNav) {
    topNav.classList.toggle("is-scrolled", window.scrollY > 8);
  }

  const activeOffset = topNav ? topNav.offsetHeight + 32 : 96;
  const activeSection = sections
    .filter((section) => section.offsetTop <= window.scrollY + activeOffset)
    .pop() || sections[0];

  navLinks.forEach((link) => {
    link.classList.toggle(
      "is-active",
      link.getAttribute("href") === `#${activeSection.id}`
    );
  });
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

} else {
  sections.forEach((section) => section.classList.add("is-visible"));
}
