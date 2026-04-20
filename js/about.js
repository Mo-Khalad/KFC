var navbar = document.getElementById("navbar");
var loading= document.querySelectorAll(".loading");
var navBtns = document.querySelectorAll(".nav-btns");

/* The function responsible for making the navigation bar
   transparent when scrolling. */

   window.addEventListener("scroll" , function(){
var scrolled = window.scrollY
 if(scrolled> 0.1 ) {
    navbar.classList.add('top-fixed')
 }
  else if(scrolled <= 0 ){
   navbar.classList.remove('top-fixed')
  }
}
   )

/* function responsible for the slider implemented using
   the owl-carousel library. */

   $('.owl-carousel').owlCarousel({
    items:4,
    loop:true,
    merge:true,
    margin:10,
    dots:true ,
    dotsEach:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:true
        },
          900:{
            items:3,
            nav:true
        },
        1100:{
            items:4,
            nav:true,
          
        }
    }
   });

/* The function responsible for hiding the loading after the
   page content has finished loading. */

   document.addEventListener("DOMContentLoaded", function() {
    for(var i = 0 ; i<= loading.length ; i++){
      loading[i].style.display='none'        
    }
   })

/* The function responsible for adding and deleting class focus. */   
for(var i = 0 ; i<navBtns.length ; i++){
    navBtns[i].addEventListener('click' , function(){
        for(var j=0 ; j<navBtns.length ; j++){
          navBtns[j].classList.remove('focus')        
        }
    this.classList.add("focus");
    })
}
