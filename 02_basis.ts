// 声明一个变量a，同时指定他的类型为number
let a: number;

// a的类型设置为了number，在以后的使用过程中a的值只能是数字
a=10;
a=33;
// a='hello';  此行代码会报错

let b: string;
b = 'hello'
// b = 123

// 声明完变量直接赋值
let c: boolean = true

// 如果变量的声明和赋值是同时进行，TS可以自动对变量进行类型检测
let d = false

d = true
// d= 123

function sum(a: number, b: number): number {
    return a + b
}

let result = sum(123, 456)