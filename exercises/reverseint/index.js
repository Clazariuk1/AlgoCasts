// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    const string = n.toString()
    console.log("string: " + string)
    const reversed = string.split('').reverse().join('')
    console.log("reversed string: " + reversed)
    const reversedInt = parseInt(reversed)
    console.log("ReversedInt: " + reversedInt)
    return reversedInt * Math.sign(n)
}

module.exports = reverseInt;

console.log(reverseInt(-51)) // 15
