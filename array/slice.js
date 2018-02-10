//slice接受两个参数第一个为数组的起始位置，第二个为所在位置但不选
// 如果一个参数则为当前位置到末尾，负数且绝对值小于数组的长度则相加再进行截取，大于长度则选择所有
var a = [1, 2, 3, 4, 5, 6];
var b = a.slice(0, 4);
var c = a.slice(4);
var d = a.slice(2, -2);
var e = a.slice(-8);
console.log(b, c, d, e);
//截取字符串和截取数组类似
var str = "I am a boy";
console.log(str.slice(4));