//节流函数
var throttle = function (fn, delay) {
    var timer = null;//定时器
    return function () {
        var context = this, args = arguments;//保存this和参数
        clearTimeout(timer);//清除定时器
        timer = setTimeout(function () {//设置定时器
            fn.apply(context, args);//执行函数
        }, delay);//延迟时间
    };
};
//使用
var better_scroll = throttle(function () {//节流函数
    console.log('触发了滚动事件');//打印
}
, 1000);
window.addEventListener('scroll', better_scroll);//绑定滚动事件

//内部迭代器
var each = function (arr, fn) {
    for (var i = 0, len = arr.length; i < len; i++) {
        fn(arr[i], i);
    }
};
each([1, 2, 3], function (item, i) {
    console.log(item);//打印
});

function isArrayLike()
{
    var arr = [1, 2, 3, 4, 5];
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);//打印
    }
}