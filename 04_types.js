// object表示一个js对象 
var a;
a = {};
a = function () { };
// 在属性名后面加上一个问号“ ? ”，表示该属性为可选，可填可不填
var b;
// b = {}
b = { name: 'li', age: 18 };
b = { name: 'li' };
// [propName: string]: any  表示任意类型的属性
var c;
c = { name: '猪八戒', age: 18, gender: '男' };
var d;
d = function (n1, n2) {
    return n1 + n2;
};
/*
    数组的类型声明
        类型[]
        Array<类型>
 */
// String[] 表示字符串数组
var e;
e = ['a', 'b'];
// number[]  表示数值数组
var f;
f = [1, 2, 3];
var g;
/*
    元组， 元组就是固定长度的数组
    语法: [类型， 类型， 类型]
*/
var h;
h = ['abc', 'hello'];
// h = ['abc']
// h = [123]
// h = ['abc', 'hello' 123]
/*
    enum枚举

*/
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
var i;
i = {
    name: '孙悟空',
    gender: Gender.Male //  'male'
};
console.log(i.gender === Gender.Male);
