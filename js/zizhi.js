$(document).ready(function(){
	var flag=0;
    $(".name").click(function(){
      $(".item-list").toggle();
	  flag++;
	  if(flag%2==0){
		   $(".manu-box").css("height","171px");
		   flag==0;
	  }
	  else if(flag%2!=0){
		  $(".manu-box").css("height","100px");
	  }
    });
	$(".item1").focus(function(){
	       $(".breadcrumbs").eq(1).text("小米平台商城主体");
	});
	$(".item2").focus(function(){
	       $(".breadcrumbs").eq(1).text("销售主体");
	});
});