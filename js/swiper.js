// var timeOut = 0;
// let slideIndex = 0;
// var autoOn = true;

// var dots = document.querySelectorAll('.dot');
// var prevArrow = document.querySelector('.prev');
// var showArrow = document.querySelector('.next');

// autoSlides();

// function autoSlides() {
//     timeOut = timeOut - 20;
//     if (autoOn == true && timeOut < 0) {
//         showSlides();
//     }
//     setTimeout(autoSlides, 20);
// }

// function prevSlide() {

//     timeOut = 5000;

//     var slides = document.querySelectorAll(".slide");

//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slideIndex--;

//     if (slideIndex > slides.length) {
//         slideIndex = 1
//     }
//     if (slideIndex == 0) {
//         slideIndex = 3
//     }
//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].className += " active";
// }

// function showSlides() {

//     timeOut = 5000;

//     var slides = document.querySelectorAll(".slide");

//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slideIndex++;

//     if (slideIndex > slides.length) {
//         slideIndex = 1
//     }
//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].className += " active";
// }

// prevArrow.addEventListener('click', ()=> {
//     prevSlide();
// })

// showArrow.addEventListener('click', ()=> {
//     showSlides();
// })

// console.log(dots)

// dots[0].addEventListener('click',(e)=> {
//     e.preventDefault()
//     if(slideIndex===1) return
//     else if(slideIndex===2){
//         prevSlide()
//     }
//     else{
//         showSlides()
//     }
// })

// dots[1].addEventListener('click',(e)=> {
//     e.preventDefault()
//     if(slideIndex===2) return
//     else if(slideIndex===3){
//         prevSlide()
//     }
//     else{
//         showSlides()
//     }
// })

// dots[2].addEventListener('click',(e)=> {
//     e.preventDefault()
//     if(slideIndex===3) return
//     else if(slideIndex===1){
//         prevSlide()
//     }
//     else{
//         showSlides()
//     }
// })

$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:1,
        itemsDesktop:[1000,1],
        itemsDesktopSmall:[980,1],
        itemsTablet:[768,1],
        pagination:true,
        navigation:true,
        navigationText:["<",">"],
        autoPlay:true
    });
});