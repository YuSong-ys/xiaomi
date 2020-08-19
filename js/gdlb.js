/*更新如下：
1.解决了快速点击切换过快。现在连击切换有延迟。
2.解决了小圆点和左右按钮现在可以不要。而不会出现的bug
3.

*/

//1个是父级名。调用方式如下
$(function(){
imgscrool('#ban1');
imgscrool('#ban2');
})



//这是函数
function imgscrool(obj){
	
	var moving = false;		
	var width = $(obj+" .banner .img img").width();
	var i=0;
	var clone=$(obj+" .banner .img li").first().clone();
	$(obj+" .banner .img").append(clone);	
	var size=$(obj+" .banner .img li").size();	
	for(var j=0;j<size-1;j++){
		$(obj+" .banner .num").append("<li></li>");
	}
	$(obj+" .banner .num li").first().addClass("on");
	
	/*鼠标划入圆点*/
	if ($(obj+" .banner .num li")) {

	$(obj+" .banner .num li").hover(function(){
		var index=$(this).index();
		i=index;
		$(obj+" .banner .img").stop().animate({left:-index*width},1000)	
		$(this).addClass("on").siblings().removeClass("on")		
	})
	};
//处理轮播初始宽度问题	
	var a2= $(obj+" .banner img").width();
	var a3= $(obj+" .img li").length
	$(obj+" .banner .img").width(a2*a3+'px');
		
	/*自动轮播*/
	var t=setInterval(function(){
		i++;
		move();
	},2000)
		
	/*对banner定时器的操作*/
	$(obj+" .banner").hover(function(){
		clearInterval(t);
	},function(){
		t=setInterval(function(){
			i++;
			move();
		},2000)
	})
	

	if ($(obj+" .banner .btn_l")) {

	/*向左的按钮*/
	$(obj+" .banner .btn_l").stop(true).click(function(){
	if(moving){
	return;
	};
	moving=true;
		i--
		move();	
	})
	
	/*向右的按钮*/
	$(obj+" .banner .btn_r").stop(true).click(function(){
	if(moving){
	return;
	}
	moving=true;
		i++
		move()				
	})

	};
	
	function move(){
		
		if(i==size){
			$(obj+" .banner  .img").css({left:0})			
			i=1;
		}
		
		// 修改轮播每屏宽度
		if(i==-1){
			$(obj+" .banner .img").css({left:-(size-1)*width})
			i=size-2;
		}	
		$(obj+" .banner .img").stop(true).delay(200).animate({left:-i*width},1000,function(){
			moving = false;
		})
		
		if(i==size-1){
			$(obj+" .banner .num li").eq(0).addClass("on").siblings().removeClass("on")	
		}else{		
			$(obj+" .banner .num li").eq(i).addClass("on").siblings().removeClass("on")	
		}
	}	
}	