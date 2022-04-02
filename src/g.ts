/*

By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?

*/

let primePosition: number = 1
let num: number = 2

const isPrime = (n: number): boolean => {
    let counter: number = 0
    for (let i: number = 2; i < n; i++) {
        if (n % i === 0) counter++
    }
    const result: boolean = counter === 0 ? true : false
    return result
}

while (primePosition < 10002) {
    if (isPrime(num)) primePosition++
    num++
}

console.log(`10 001st prime number is ${num - 1}`)

export { }
