// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    reversed = str.split('').reverse().join('')
    console.log(reversed)
    if (str === reversed) {
        return true
    }
    return false
}

console.log(palindrome("racecar")) // true
console.log(palindrome("lived devil")) // true
console.log(palindrome("kevin")) // false

module.exports = palindrome;
