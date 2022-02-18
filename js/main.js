
const responsive = {
    0 : {
        items: 1
    },
    320 : {
        items: 1
    },
    560 : {
        items: 2
    },
    960 : {
        items: 3
    }
}


$(document).ready(function(){

    $('a[href*="#"]').on('click', function(e){
		$('html,body').animate({
			scrollTop: $($(this).attr('href')).offset().top - 100
		},500);
		e.preventDefault();
	});

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /** Click Event On Toggle Menu */
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    })

    // owl-carousel for blog
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: responsive
    });

    // click to croll top
    $('.move-up span').click(function(){
        $('html, body, sidebar').animate({
            scrollTop:0
       }, 1000);
   })
    
   // AOS Instance
   AOS.init();

});



//form 
//const workTogether = document.getElementById("newsletter");
//const form = document.getElementsByClassName("form")[0];
//const sendButton = document.getElementById("send");
//const thanksForm = document.getElementsByClassName("thanks")[0];
//const thanksButton = document.getElementById("thanksButton");
//newsletter.addEventListener("click", function(){
//  form.style.display = "block";
//})
//sendButton.addEventListener("click", function(){
//    thanksForm.style.display = "grid";
//  })

//thanksButton.addEventListener("click", function(){
//  thanksForm.style.display = "none";
//form.style.display = "none";
//})