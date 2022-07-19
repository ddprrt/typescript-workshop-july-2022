const person: [name: string, age: number] = ["Stefan", 40]; // [string, number]
const arrayWithPersonElements = ["Stefan", 40]; // (string | number)[]

const anotherPerson = ["Stefan", 40] as const;

/*const firstElement = arrayWithPersonElements[0]
const secondElement = arrayWithPersonElements[1]*/

function hello(name: string, msg: string, greeting: string) {

}


function hello2(...rest: [name: string, msg: string, greeting: string]) {}

hello("Stefan", "Hello", "How are you");
hello2("Stefan", "Hello", "How are you");


// Variadic Tuple Types

// 1. Finite length, fixed length
// 2. Every type on every position is known

const arr = [1, 2, ...[3, 4, 5]]

type StartsWithStringEndsWithString<T extends unknown[]> = 
    [string, ...T, string]

type Demo1 = StartsWithStringEndsWithString<[]>
type Demo2 = StartsWithStringEndsWithString<[boolean]>
type Demo3 = StartsWithStringEndsWithString<[string, number, string]>


function concat<
    T extends unknown[], 
    U extends unknown[]
>(array1: [...T], array2: [...U]): [...T, ...U] {
    return [...array1, ...array2]
}

const result = concat([1, 2, "3", 4, 5], [6, 7, 8, 9])

function doSomething(a: string, b: number, c: boolean, d: string): number {
    return b
}

/*const x = curry(doSomething, "Hello", 12, true);
x("Another String")

const y = curry(doSomething, "Hello");
y(13, true, "Another String");*/

function curry<
    PList1 extends unknown[],
    PList2 extends unknown[],
    ReturnValue
>(fn: (...args: [...PList1, ...PList2]) => ReturnValue, ...args1: PList1) {
    return (...args2: PList2) => fn(...args1, ...args2)
}

const curriedDoSomething = curry(doSomething, "Hello")
curriedDoSomething(12, true, "Another String")

export {}