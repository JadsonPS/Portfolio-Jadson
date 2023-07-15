//header scrolling effect
$(window).on('scroll', function(){
    if($(window).scrollTop()){
        $('header').addClass('nav-show');
    } else {
        $('header').removeClass('nav-show');
    }
})


//hamburger
const navSlide = () => {
    const hamburger = document.querySelector(".hamburger");
    const navbar = document.querySelector(".nav-bar");
    const navLinks = document.querySelectorAll(".nav-bar li");

    hamburger.onclick = () => {
        navbar.classList.toggle("nav-active")

        //Animaton links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7+1}s`;
            }
        });

        //hamburger animation
        hamburger.classList.toggle("toggle");
    }
}

window.onload = () => navSlide();






//Show button go up
function showButton() {
    if(document.documentElement.scrollTop < 200) {
        /* calculo do valor da opacidade */
        let bluur = document.documentElement.scrollTop % 100; 
        document.getElementById("go-up").style.opacity = "0." + bluur;
        document.getElementById("go-up").style.display = "none";

    } else {
        document.getElementById("go-up").style.opacity = "1"
        document.getElementById("go-up").style.display = "flex";
    }
}

window.onscroll = function() {showButton()};





