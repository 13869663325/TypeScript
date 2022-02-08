// object表示一个js对象 
let a: object
a = {}
a = function (){}


// 在属性名后面加上一个问号“ ? ”，表示该属性为可选，可填可不填
let b: {name: string, age?: number}
// b = {}
b = {name: 'li', age: 18}
b = {name: 'li'}

// [propName: string]: any  表示任意类型的属性
let c: {name: string, [propName: string]: any}
c = {name: '猪八戒', age: 18, gender: '男'} 

let d: (a: number, b: number) => number
d = function (n1, n2): number {
    return n1 + n2
}


/* 
    数组的类型声明
        类型[]
        Array<类型>
 */

// String[] 表示字符串数组
let e: string[]
e  = ['a', 'b']


// number[]  表示数值数组
let f: number[]
f = [1,2,3]

let g: Array<number>

/* 
    元组， 元组就是固定长度的数组 
    语法: [类型， 类型， 类型]    
*/
let h: [string, string]
h = ['abc', 'hello']
// h = ['abc']
// h = [123]
// h = ['abc', 'hello' 123]


/* 
    enum枚举

*/

enum Gender{
    Male,
    Female
}

let i: {name: string, gender: Gender}
i = {
    name: '孙悟空',
    gender: Gender.Male    //  'male'
}

// console.log(i.gender === Gender.Male);
// & 表示与
let j: {name: string} & {age: number}   // 这种才是正确写法
j = {name: '孙悟空', age: 18}

let z: string & number  // 没有意义,错误写法


// 类型的别名
type myType = 1 | 2 | 3 | 4 | 5 
let k: myType
let l: myType
let m: myType


k = 5
// k = 67