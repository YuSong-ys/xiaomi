window.onload = function() {
    // 轮播图部分
    //鼠标经过轮播图，左右按钮显示出来
    //获取元素
    var focus = document.querySelector('.focus');
    var arrow_l = document.querySelector('.arrow-l');
    var arrow_r = document.querySelector('.arrow-r');
    var widthmax = focus.offsetWidth;
    // 鼠标进入显示左右按钮
    focus.addEventListener('mouseenter', function() {
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';
        //鼠标放上停止定时器
        clearTimeout(timer);
        timer = null;
    });
    // 鼠标离开隐藏左右按钮
    focus.addEventListener('mouseleave', function() {

        arrow_l.style.display = 'none';
        arrow_r.style.display = 'none';
        // 鼠标离开开始定时器
        timer = setInterval(function() {
            arrow_r.click();
        }, 3000);
    });
    // 动态生成小圆圈
    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('.circle');
    for (var i = 0; i < ul.children.length; i++) {
        // 创建li
        var li = document.createElement('li');
        // 设置自定义属性
        li.setAttribute('data-index', i);
        // 加入有序列表
        ol.appendChild(li);
        // 点击小圆点切换轮播图并改变小圆点颜色
        li.addEventListener('mouseenter', function() {
            // 排他思想
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            this.className = 'current';
            // 获取点击的小圆点的自定义属性，并分别赋值给num  circle 
            var index = this.getAttribute('data-index');
            num = index;
            circle = index;
            //轮播动画
            myanimate(ul, -index * widthmax);
        })
    }
    //默认把第一个小圆点设置点击样式
    ol.children[0].className = 'current';
    //深克隆第一张图片并放在最后
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);

    // num控制点击左右按钮
    var num = 0;
    // circle控制点击小圆点
    var circle = 0;
    // 节流阀
    var flag = true;
    // 右边按钮点击事件
    arrow_r.addEventListener('click', function() {
        if (flag) {
            flag = false;
            // 如果到了最后一张图片， 就把num设置为0， 也就是第一张
            //ul克隆了一张，所以num 实际比circle 大1
            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            }
            //每次点击num自增1
            num++;
            myanimate(ul, -num * widthmax, function() {
                flag = true;
            });
            // circle同时自增1
            circle++;
            // 如果到了最后一张图片， 就把circle设置为0， 也就是第一张
            if (circle == ol.children.length) {
                circle = 0;
            }
            circleChange();
        }

    });
    arrow_l.addEventListener('click', function() {
        // 节流阀
        if (flag) {
            flag = false;
            if (num == 0) {
                num = ul.children.length - 1;
                ul.style.left = -num * widthmax + 'px';
            }
            num--;
            myanimate(ul, -num * widthmax, function() {
                flag = true; //打开节流阀
            });
            circle--;
            if (circle < 0) {
                circle = ol.children.length - 1;
            }

            circleChange();
        }
    });
    // 封装改变小圆点排他思想函数
    function circleChange() {
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        ol.children[circle].className = 'current';
    }
    //模拟右点击事件，实现轮播图自动播放
    var timer = setInterval(function() {
        arrow_r.click();
    }, 3000);

    // 小米闪购切换部分
    var arrow_left = document.querySelector('.arrow-left');
    var arrow_right = document.querySelector('.arrow-right');
    var flashul = document.querySelector('.home-flashsale ul')
    arrow_right.addEventListener('click',function(){
        myanimate(flashul,-992);
        arrow_right.style.color = '#ccc'
        arrow_left.style.color = '#333'
    })
    arrow_left.addEventListener('click',function(){
        myanimate(flashul,0);
        arrow_right.style.color = '#333'
        arrow_left.style.color = '#ccc'
    })

    //秒杀倒计时
    // 1. 获取元素 
    var hour = document.querySelector('.hour'); // 小时的黑色盒子
    var minute = document.querySelector('.minute'); // 分钟的黑色盒子
    var second = document.querySelector('.second'); // 秒数的黑色盒子
    var inputTime = +new Date() + 1000*60*60*10; // 返回的是用户输入时间总的毫秒数
    countDown(); // 我们先调用一次这个函数，防止第一次刷新页面有空白 
    // 2. 开启定时器
    setInterval(countDown, 1000);
    function countDown() {
        var nowTime = +new Date(); // 返回的是当前时间总的毫秒数
        var times = (inputTime - nowTime) / 1000; // times是剩余时间总的秒数 
        var h = parseInt(times / 60 / 60 % 24); //时
        h = h < 10 ? '0' + h : h;
        hour.innerHTML = h; // 把剩余的小时给 小时黑色盒子
        var m = parseInt(times / 60 % 60); // 分
        m = m < 10 ? '0' + m : m;
        minute.innerHTML = m;
        var s = parseInt(times % 60); // 当前的秒
        s = s < 10 ? '0' + s : s;
        second.innerHTML = s;
    }
}

$(function() {
    //selectlocation
    $('.site-topbar .topbar-nav a:last').click(function(){
        // console.log(1)
        $('.video-background').show();
        $('.site-select-regions').fadeIn(500);
    })
    $('.site-select-regions .close-icon').click(function(){
        // console.log(2)
        $('.video-background').hide();
        $('.site-select-regions').fadeOut(500);
    })

    // 滑动到指定位置显示侧边栏
    var home_main = $('.home-main').offset().top;
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

     //flashsale-list顶部边框颜色
     var arr = ['green','#e53935','blue','yellow','blue','#e53935','green','yellow']
     $('.flashsale-list li').each(function(index,item){
         $(item).css("border-top-color",arr[index])
     })

    //category-detail
    let category_detail = $('.category-detail');
    $('.site-category li').mouseenter(function(){
        $(this).find(category_detail).show();
    })
    $('.site-category li').mouseleave(function(){
        $(this).find(category_detail).hide();
    })
    // home-brick-row2-box tab栏切换
    $('.home-brick-row2-box .tab-list li').mouseenter(function(){
        $(this).addClass('tab-active').siblings().removeClass('tab-active');
        $('.home-brick-row2-box .brick-item-r').eq($(this).index()).fadeIn();
        $('.home-brick-row2-box .brick-item-r').eq(!$(this).index()).hide();
    })

    // 视频播放部分
    var showvideo = function(){
        $('.video-background').show();
        $('.video-box').show();
        $('.video-box video').prop('src',"video/钢铁侠.mp4");
    }
    $('.home-brick-row3-box .play').click(showvideo)
    $('.home-brick-row3-box img').click(showvideo)
    $('.video-box .closevideo').click(function(){
        $('.video-background').hide();
        $('.video-box').hide();
        $('.video-box video').prop('src',"");
    })
})