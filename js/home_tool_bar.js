$(function(){
	// 滑动到指定位置显示侧边栏
	    var home_main = $('.components-list-box').offset().top;
	    function toggleTool() {
	        if ($(document).scrollTop() >= home_main) {
	            $('.last-bar').fadeIn();
	
	        } else {
	            $('.last-bar').fadeOut();
	        }
	    }
	    toggleTool();
	    $(window).scroll(function() {
	        toggleTool();
	    });
	
	    //返回顶部
	
	    $('.last-bar').click(function(){
	        // $(document).scrollTop(0);
	        //带动画过渡
	        $('html,body').animate({scrollTop:0},300);
	    })
	
})