// 直接使用字面量进行声明

let a: 10;

a = 10;
// a = 11;


// 可以使用 | 来链接多个类型（联合类型）
let b: 'male' | 'female'

b = 'male'
b = 'female'
// b = 'hello'

let c: boolean | string
c = true
c = 'hello'


// any表示的是任意类型，一个变量设置类型为any后相当于对改变变量关闭了TS的类型检测
// 使用TS时，比建议使用any类型
let d: any
d = 10
d = 'hello'
d = true

// unknown表示位置类型的值
let e: unknown
e = 10
e = 'hello'
e = true


if (typeof e === 'string') {
    d = e
}

// 类型断言
d = e as string
d = <string>e

// void表示空，以函数为例，就表示没有返回值的函数
function fn(): void {
    return
    // return 123
}

// never  永远不会返回结果
function fn2(): never{
    throw new Error('报错了!')
}