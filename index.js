window.onscroll = function(){stickynav()};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickynav() {
    if(window.scrollY > 0) {
        navbar.classList.add("sticky");
        console.log(window.scrollY);
}
    else{
        navbar.classList.remove("sticky");
    }
}