var themeToggler = document.querySelector('.theme-toggle'); 
themeToggler.onclick = function theme_toggler(){
    document.querySelector('html').classList.toggle("dark");
    if(document.querySelector('html').classList.contains("dark")){
        document.querySelector('.theme-state').innerHTML = "Switch to light mode";
    }
    else{
        document.querySelector('.theme-state').innerHTML = "Switch to dark mode";  
    }
}