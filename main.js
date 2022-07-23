window.addEventListener('contextmenu', function (e) {
    e.preventDefault();
}, false);

var color_switch = document.getElementById("color_switch_input");
color_switch.addEventListener('click', changecolors);
function changecolors() {
    if (color_switch.checked) {
        document.body.classList.add("dark_colors");
    }
    else {
        document.body.classList.remove("dark_colors");
    }
}

var works_window = document.getElementById("works_window");
works_window.addEventListener('click' , works);
function works() {
var works = document.getElementById("works");
var about = document.getElementById("about");
if (works_window.checked) {
    works.style.display = "grid";
    about_window.checked = false;
    about.style.display = "none";
}
else {
    works.style.display = "none";
}
}

var about_window = document.getElementById("about_window");
about_window.addEventListener('click' , about);
function about() {
var about = document.getElementById("about");
var works = document.getElementById("works");
if (about_window.checked) {
    about.style.display = "grid";
    works_window.checked = false;
    works.style.display = "none";
}
else {
    about.style.display = "none";
}
}