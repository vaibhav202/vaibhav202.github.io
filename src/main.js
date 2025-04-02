const html = document.documentElement;
const themeState = document.querySelector(".theme-state");
const themeToggler = document.querySelector(".theme-toggle");
const savedTheme = localStorage.getItem("darkTheme");
if (savedTheme === "true") {
  html.classList.add("dark");
  themeState.innerText = "Switch to light mode";
} else {
  html.classList.remove("dark");
  themeState.innerText = "Switch to dark mode";
}
themeToggler.addEventListener("click", () => {
  html.classList.toggle("dark");
  const hasDarkClass = html.classList.contains("dark");
  localStorage.setItem("darkTheme", hasDarkClass);
  if (hasDarkClass) {
    themeState.innerText = "Switch to light mode";
  } else {
    themeState.innerText = "Switch to dark mode";
  }
});
