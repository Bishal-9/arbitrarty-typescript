/*

2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

*/

let product: number = 1
let j:number = 11

const isDivisible = (n: number): boolean => {

    let result: boolean = true

    for (let i: number = 1; i < 21; i++) {
        if (n % i !== 0) result = false
    }

    return result
}

while (true) {
    if (isDivisible(j)) {
        product = j
        break
    }
    j++
}

console.log(`${product} is the smallest number that can be divided by each of the numbers from 1 to 20 without any remainder.`)

export {}
