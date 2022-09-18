var themeToggler = document.querySelector('.theme-toggle'); 
themeToggler.onclick = function theme_toggler(){
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")){
        document.querySelector('.theme-state').innerHTML = "Switch to light mode";
    }
    else{
        document.querySelector('.theme-state').innerHTML = "Switch to dark mode";  
    }
}