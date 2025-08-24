// Dropdown toggle
const menuToggle = document.getElementById("menu-toggle");
const dropdown = document.getElementById("dropdown");
const menuRef = document.getElementById("menuRef");

menuToggle.addEventListener("click", () => {
  dropdown.classList.toggle("hidden");
});

// Close dropdown when clicking outside
document.addEventListener("click", (e) => {
  if (!menuRef.contains(e.target)) {
    dropdown.classList.add("hidden");
  }
});

// ✅ Close dropdown when clicking on list item
const dropdownLinks = dropdown.querySelectorAll("a"); // ya "li" agar <li> clickable hai
dropdownLinks.forEach(link => {
  link.addEventListener("click", () => {
    dropdown.classList.add("hidden");
  });
});


