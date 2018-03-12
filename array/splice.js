const a = [1, 2, 3, 4, 5, 6];//splice适用于处理数组
const b = a.splice(2, 3, 8);//此时返回的是被移除的元素组成的数组
console.log(a, b);

var c = ['q', 'w', 'e'];
console.log(c.splice(1,1))
