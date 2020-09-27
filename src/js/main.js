const burgerBtn = document.querySelector(".burger");
const navHolder = document.querySelector(".header__nav-holder");
burgerBtn.addEventListener("click", () => {
    if (burgerBtn.className == "burger") {
        burgerBtn.classList.remove("burger");
        burgerBtn.classList.add("burger-active");
        navHolder.classList.add("header__nav-holder-active");
    } else {
        burgerBtn.classList.remove("burger-active");
        burgerBtn.classList.add("burger");
        navHolder.classList.remove("header__nav-holder-active");
    }
});


$(window).ready(function(){
    setTimeout ("$('#webim').show('drop');",2000);
    setTimeout ("$('#installation_header').show('drop');",2000);
});