/*

The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.

*/

let sum: number = 0

const isPrime = (n: number): boolean => {
    let counter: number = 0
    for (let i: number = 2; i < n / 2 + 1; i++) {
        if (n % i === 0) counter++
    }
    if (counter > 0) return false
    else return true
}

for (let i: number = 2; i < 2000000; i++) {
    if (isPrime(i)) sum += i
}

console.log(`The sum of all the primes below two million is ${sum}`)

export {}
