// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// 0. declare function and its parameters
// 0.5 create conditional : if the two strings are NOT the same length, or are LITERALLY the same, return false.
// 1. create an empty hash set / frequency counter object for each string to keep track of the volume of character occurances
// 1.5 create array variables from the string paramaters using the split method.
// 1.75 sort these arrays so that everything occurs alphabetically
// 2. Create a for of loop to fill out the hash set for BOTH string objects separately
// 3. create a for in loop that compares the value of key at stringA's hash with value of key at StringB's hash.
// 4. if they are NOT the same value at any point, return false.
// 5. Return true.

function anagrams(stringA, stringB) {
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    if (stringA.length !== stringB.length || stringA === stringB) {
        return false
    }
    const arrayAHash = {}
    const arrayBHash = {}

    const arrayA = stringA.toLowerCase().split('').sort()
    const arrayB = stringB.toLowerCase().split('').sort()

    for (let char of arrayA) {
        if (!letters.includes(char)) {
            char++
        }
        else {
        arrayAHash[char] = (arrayAHash[char] || 0) + 1
        }
    }
    console.log(arrayAHash)
    for (let char of arrayB) {
        if (!letters.includes(char)) {
            char++
        }
        else {
            arrayBHash[char] = (arrayBHash[char] || 0) + 1
        }
    }
    console.log(arrayBHash)

    for (key in arrayAHash) {
        if (arrayAHash[key] != arrayBHash[key]) {
            return false
        }
    }
    return true
}

console.log(anagrams("ra.#?!!@#cecar?!", "care241!!?.car?!")) // true
console.log(anagrams("kittens", "pudding")) // false

module.exports = anagrams;
