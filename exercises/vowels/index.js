// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    const VOWELS = 'aeiou'
    let answer = 0
    for (let i = 0; i < str.length; i++) {
        if (VOWELS.includes(str[i].toLowerCase())) {
            answer++
        }
    }
    return answer
}

module.exports = vowels;

console.log(vowels('Hi There!')) // 3
console.log(vowels('Why do you ask?')) // 4
console.log(vowels('Why?')) // 0
