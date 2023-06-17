console.log(Array.of({length:5,3:1}))//[{length:5,3:1}]
console.log([].copyWithin.call({length:5,3:1},0,3))
//箭头函数中的this指向定义时所在的对象，而不是使用时所在的对象
var obj = {
    birth: 1990,
    getAge: function () {
        var b = this.birth; // 1990
        var fn = () => new Date().getFullYear() - this.birth; // this指向obj对象
        return fn();
    }
};
console.log(obj.getAge()); // 25
