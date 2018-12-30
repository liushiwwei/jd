window.onresize = function () {
    RemPx()
}

RemPx()

function RemPx() {
    var docEl = document.documentElement;
    var width = 750;
    var FontSize = 37.5;
    // 获取当前视口的宽度
    var nowWidth = docEl.clientWidth;

    var nowFontSize = nowWidth / (width / FontSize);
    docEl.style.fontSize = nowFontSize + 'px';
}



window.addEventListener('load', function () {
    /* 获取元素 querySelector querySelectAll在移动端推荐使用这个方式
    0. 顶部搜索框背景色透明度渐变
    1. 在滚动的时候获取滚动的距离
    2. 获取轮播图的高度
    3. 计算透明度值 = 滚动距离 / 轮播图的高度
    4. 设置给透明背景色 rgba(红,绿,蓝,透明度值); */

    //获取轮播图的元素
    var slide = document.querySelector('#slide');
    //获取轮播图的高度
    var slideHeight = slide.offsetHeight;
    //获取头部元素
    var header = document.querySelector('#header');

    //把计算透明度代码封装到函数里面,页面一加载就调用一下 在事件里也不短的调用
    setHeaderOpacity();

    function setHeaderOpacity() {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        //计算透明值
        var opacity = scrollTop / slideHeight;

        header.style.backgroundColor = 'rgba(222, 24, 27, ' + opacity + ')';
    }
    // 4. 添加一个滚动条滚动的事件 指定当前设置透明透明度的函数 传的是函数体
    window.addEventListener('scroll', setHeaderOpacity);


    /* 倒计时js效果
    1. 先得到一个总时间
    2. 在前端对时间进行每隔一秒计算总秒数
    3. 把减完后的时间 时分秒 计算出来显示到页面上
    4. 分别显示 十位和个位  */

    var spans = document.querySelectorAll('.down-time span:not(:nth-child(3n))');

    var time = 2*60*60;

    function setDownTime (){
        if(time <= 0){
            time =7200;
        }
        var hour = Math.floor(time / 60 /60);

        var minute = Math.floor(time% 3600 /60 );

        var second = time % 3600 % 60 ;
        spans[0].innerHTML = Math.floor(hour / 10);
        // 设置小时的个位 数字 % 10  21 % 10 == 1
        spans[1].innerHTML = Math.floor(hour % 10);
        spans[2].innerHTML = Math.floor(minute / 10);
        spans[3].innerHTML = Math.floor(minute % 10);
        spans[4].innerHTML = Math.floor(second / 10);
        spans[5].innerHTML = Math.floor(second % 10);
    }
    // 2. 设置一个定时器 每隔1秒--
    setInterval(function () {
        // 3. 让time总时间--
        time--;
        // 4. 减完后再设置倒计时的时分秒
        setDownTime();
    }, 1000);
})