const toggle = document.getElementById("dark-mode");

toggle.addEventListener("change", () => {
  document.documentElement.classList.toggle("dark", toggle.checked);
});
