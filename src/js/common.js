$(function(){
    
    //Button download with animation
    $(window).scroll(function(){
        if($(this).scrollTop() >= 2400){
            $('.download .btn-download').addClass("animated tada");
        }
    });
    
    //Works scroll
    $('.works').hide();
    $(window).scroll(function(){
        if($(this).scrollTop() >= 600){
            $('.works').addClass("animated fadeIn");
            $('.works').show();
        }
    });
    
    $(window).scroll(function(){
        if($(this).scrollTop() >= 90){
            $('.header .header-top').addClass('fixed-menu').css('height', '85');
        }
        else if($(this).scrollTop() <= 90){
            $('.header .header-top').removeClass('fixed-menu').css('height', '105');
        }
    });
    
    $('#btn_menu_sm').bind('click', function(){
        $('.navigation').addClass('open-nav');
        $(this).hide();
    });
    
    $("#btn_close").bind('click', function(){
        $('.navigation').removeClass('open-nav');
        $('#btn_menu_sm').show();
    });
    
    //Carousel text
    var swiper = new Swiper('.slider #swiper-container', {
        pagination: '.slider .swiper-pagination',
        paginationClickable: true,
        effect: 'fade'
    });
    
    
    
});