// 1. 普通的累加函数
var curring = function(fn) {
    var args = [];
    return function() {
        if (arguments.length === 0) {
            return fn.apply(this, args);// 求值并返回
        } else {
            [].push.apply(args, arguments);// 将实参添加到 args 中
            return arguments.callee;// 返回函数本身，继续收集参数
        }
    }
};
var cost = (function() {
    var money = 0;
    return function() {
        for (var i = 0, l = arguments.length; i < l; i++) {
            money += arguments[i];
        }
        return money;
    }
})();
var cost = curring(cost); // 转化成 curring 函数
cost(100); // 不立即求值
cost(200); // 不立即求值
cost(300); // 不立即求值
console.log(cost()); // 求值并输出：600
