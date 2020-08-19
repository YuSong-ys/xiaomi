$(function() {
    var slide_up = $('.slide-up');
    $('.header-nav .nav-list li').mouseenter(function(){
        //stop()结束上一次动画，解决短时间多次触发动画bug
        $(this).find(slide_up).stop().slideDown(300); 
    })
    $('.header-nav .nav-list li').mouseleave(function(){        
        $(this).find(slide_up).stop().slideUp(300);
    })
})