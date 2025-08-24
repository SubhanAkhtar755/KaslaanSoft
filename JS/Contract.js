// simple animation jaise React me tha (intersection observer ka alternative)
document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector(".contract-section");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        section.classList.add("visible");
      }
    });
  });
  observer.observe(section);
});


