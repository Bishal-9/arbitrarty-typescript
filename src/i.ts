/*

A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
    a^2 + b^2 = c^2
For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc

*/

let a: number = 0
let b: number = 0
let c: number = 0

for (let i: number = 2; i < 500; i++) {
    for (let j: number = i; j < 500; j++) {
        const n: number = Math.sqrt(i ** 2 + j ** 2)
        if (!n.toString().includes('.')) {
            if (i + j + n === 1000) {
                a = i
                b = j
                c = n
                break
            }
        }
    }
}

console.log(`The product of the Pythagorean triplet for which a + b + c = 1000 is ${a * b * c}`)

export {}
