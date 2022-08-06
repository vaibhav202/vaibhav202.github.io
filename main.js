var theme_toggler = document.querySelector('#theme-toggler');
theme_toggler.addEventListener('click', toggle_theme);

function toggle_theme(){
    if(theme_toggler.checked) {
        document.body.classList.add('dark');
    }
    else{
        document.body.classList.remove('dark');
    }
}