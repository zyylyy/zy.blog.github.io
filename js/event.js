/*js对于函数的定义是非常松，即使你在函数定义时未写任何参数，或者你定义的参数有多个，但是你调用时，一个参数也不填，也不会出错的。 
因为js函数内默认有个变量，保存你的入参叫：arguments， 
他是一个数组，下标从0开始， */
function eventTest() {
    var event = window.event || arguments[0];
    //target 就是这个对象
    var target = event.srcElement || event.target,
        //这个对象的值
    var  targetValue = target.value;
}

function eventTest(a, b) {
    var event = window.event || arguments.callee.caller.arguments[0]
    //target 就是这个对象
    var  target = event.srcElement || event.target,
        //这个对象的值
    var  targetValue = target.value;
}