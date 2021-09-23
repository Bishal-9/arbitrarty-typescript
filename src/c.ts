/*

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?

*/

const num: number = 600851475143
let largestPrimeFactor: number = 0

const prime = (n: number) => {

    let counter: number = 0

    for (let j: number = 2; j < n; j++) {

        // * If divisible then increase
        if (n % j === 0) counter++
    }

    // * Considering the number is Prime or not
    let isPrime: boolean = false
    if (counter === 0) isPrime = true

    return isPrime
}

for (let i: number = 2; i <= num / 2; i++) {

    if (num % i === 0) {

        if (prime(i) && largestPrimeFactor < i) largestPrimeFactor = i
    }
}

console.log('Largest Prime Factor of 600851475143 is ', largestPrimeFactor)