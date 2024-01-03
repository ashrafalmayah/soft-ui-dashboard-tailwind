const toggle = document.getElementById("dark-mode");

if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark');
  toggle.checked = true;
} else {
  document.documentElement.classList.remove('dark')
  toggle.checked = false;
}

toggle.addEventListener("change", () => {
  document.documentElement.classList.toggle("dark", toggle.checked);
  localStorage.setItem('color-theme', toggle.checked ? 'dark' : 'light');
});
