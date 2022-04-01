/*

A palindromic number reads the same both ways.The largest palindrome made from the product of two 2 - digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3 - digit numbers.

*/


let i: number
let j: number
let firstNumber: number = 0
let secondNumber: number = 0
let maxPalindrome: number = 0

const isPalindrome = (n: number): boolean => {
    const s: string = n.toString()
    const l: number = s.length
    let k: number
    for (k = 0; k < l / 2; k++) {
        if (s[k] !== s[l - k - 1]) {
            return false
        }
    }
    return true
}

OuterLoop:
for (i = 999; i > 100; i--) {
    for (j = 999; j > 100; j--) {
        if (isPalindrome(i * j) && i * j > maxPalindrome) {
            firstNumber = i
            secondNumber = j
            maxPalindrome = firstNumber * secondNumber
        }
    }
}

console.log(`Largest palindrome made from the product of two 3-digit numbers is ${firstNumber * secondNumber} = ${firstNumber} X ${secondNumber}.`)