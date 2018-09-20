$(function(){
    if(localStorage.getItem('home') === 'clicked'){
            $('.homepicture').hide();
            $('.home-icon').css({bottom:95 , left:50, position:'absolute'});
                   $('.home-icon').show();
                   $('.home-icon').parent().css('position', 'absolute');
                   $('.home-icon').parent().css('z-index', 99999);
            $('.container').css({'filter': 'blur(0px)','-webkit-filter': 'blur(0px)',
                        '-moz-filter': 'blur(0px)','-o-filter': 'blur(0px)',
                        '-ms-filter': 'blur(0px)'});
            localStorage.setItem('clicked', 'finished');
        }
         window.localStorage.removeItem('home');
});