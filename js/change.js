$(function() {
    // 显示时间
    setInterval(() => {
        //14:00
        var startTime = $(".box li em").eq(0).text();
        //14
        startTime = parseInt(startTime[0])*10+parseInt(startTime[1]);
        var date = new Date();
        var h = date.getHours();
        h = startTime - h ;
        var m = date.getMinutes();
        var s = date.getSeconds();
        if(h>0){
            if(h<=9 && h > -1)
            h = "0"+h;
            if(m<=9)
            m = "0"+m;
            if(s<=9)
            s = "0"+s;
            var time = "距开始"+h+":"+m+":"+s;
            $(".box li div").text(time);
        }else{
            var str = "已过期";
            $(".box li div").text(str);
            var src = $(".img-con img").attr("src");
            if(src == "img/store1.jpg"){
                $(".btn-primary").attr("style","background-color:#b2bec3");
                $(".btn-primary").text(str);
            }
        }

    }, 1000);
    // alert($(".box li em").eq(0).text());
    // $(".box li").removeClass("active");
    $(".box li").eq(0).click(function(){
        $(".box li").removeClass("active");
        $(".box li").eq(0).addClass("active");
        $(".btn-primary").removeAttr("style");
        $(".btn-primary").text("登录后抢购");
        $(".img-con img").attr("src","img/store1.jpg");
        $(".seckill-con .name").text("自清洁 | 小米互联网空调 1.5匹");
        $(".seckill-con .desc").text("高效制冷/热，全屋互联");
        $(".seckill-con .price").html("1799.00元<del></del>");
        $(".seckill-con .price del").text("2699元");
    });
    $(".box li").eq(1).click(function(){
        $(".box li").removeClass("active");
        $(".box li").eq(1).addClass("active");
        $(".img-con img").attr("src","img/store2.jpg");
        $(".seckill-con .name").text("日常元素抽纸 青春版 24包");
        $(".seckill-con .desc").text("精选原生竹浆，健康环保");
        $(".seckill-con .price").html("27.90元<del></del>");
        $(".seckill-con .price del").text("32.9元");
        $(".btn-primary").attr("style","background-color:#83c44e");
        $(".btn-primary").text("提醒我");
    });
    $(".box li").eq(2).click(function(){
        $(".box li").removeClass("active");
        $(".box li").eq(2).addClass("active");
        $(".img-con img").attr("src","img/store3.jpg");
        $(".seckill-con .name").text("小米AI音箱");
        $(".seckill-con .desc").text("听音乐、语音遥控家电");
        $(".seckill-con .price").html("199.00元<del></del>");
        $(".seckill-con .price del").text("299元");
        $(".btn-primary").attr("style","background-color:#83c44e");
        $(".btn-primary").text("提醒我")
    });
    $(".box li").eq(3).click(function(){
        $(".box li").removeClass("active");
        $(".box li").eq(3).addClass("active");
        $(".img-con img").attr("src","img/store4.jpg");
        $(".seckill-con .name").text(" 14 Ⅱ R5 8G 512G 银色");
        $(".seckill-con .desc").text("全面屏高性能轻薄本");
        $(".seckill-con .price").html("3599.00元<del></del>");
        $(".seckill-con .price del").text("3799元");
        $(".btn-primary").attr("style","background-color:#83c44e");
        $(".btn-primary").text("提醒我")
    });
    $(".box li").eq(4).click(function(){
        $(".box li").removeClass("active");
        $(".box li").eq(4).addClass("active");
        $(".img-con img").attr("src","img/store5.jpg");
        $(".seckill-con .name").text("Redmi Note 8 6GB+64GB 皓月白");
        $(".seckill-con .desc").text("千元4800万四摄");
        $(".seckill-con .price").html("999.00元<del></del>");
        $(".seckill-con .price del").text("1199元");
        $(".btn-primary").attr("style","background-color:#83c44e");
        $(".btn-primary").text("提醒我")
    });
    
})