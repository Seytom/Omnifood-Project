$(document).ready(function(){
    /* For the sticky navigation */
    $('.js--section-features').waypoint(function(direction){
       if(direction==="down"){
           
           $('nav').addClass('sticky');
       } else {
           
           $('nav').removeClass('sticky');
       } 
        
    },{offset: '60px'});
    
    
    /* For scrolling buttons */
    
    $(".js--scroll-to-plan").click(function(){
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 2000);
    });
    $(".js--scroll-to-start").click(function(){
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });
    
    
    /* Navigation scrolling */
    
    $(function() {$('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
              if (target.length) {
                $('html, body').animate({
                  scrollTop: target.offset().top
                }, 1000);
            return false;
          }
        }
      });
    });
   
    /*  Animation Scrolling  */
    
    $('.js-wp-1').waypoint(function(direction){
        $('.js-wp-1').addClass('animated fadeIn');
    }, {offset: '65%'});
    $('.js-wp-2').waypoint(function(direction){
        $('.js-wp-2').addClass('animated fadeInUp');
    }, {offset: '65%'});
    $('.js-wp-3').waypoint(function(direction){
        $('.js-wp-3').addClass('animated slideInUp');
    }, {offset: '65%'});
    $('.js-wp-4').waypoint(function(direction){
        $('.js-wp-4').addClass('animated pulse');
    }, {offset: '65%'});
    
    
    /* Mobile Nav */
    $(".mobile-nav-icon").click(function(){
        $('.main-nav').slideToggle(300);
        
        var icon = $('.mobile-nav-icon i');        
        if (icon.hasClass('ion-navicon-round')){
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }        
        
    })
    
    
    
    
    
}); /* End of document.ready() */