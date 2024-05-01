// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// I did it all by myself without internet on a cramped plane one handed.

// 0. declare function capitalize that accepts parameter strings
// 1. create empty array into which we will push modified words to later return
// 2. create an array that is the original string phrase split into an array of word strings
// 3. iterate through this string array
// 4. for each string in the array, create a variable that is comprised of the capitalized first letter followed by lowercase remainder
// 5. combine these string segments into a single array element
// 6. convert this element from an array element into a string and replace lingering commas with space
// 7. return the final answer! WOO.

function capitalize(strings) {
    const stringArray = strings.split(" ")
    const answerArray = []

    for (let str of stringArray) {
        capStr = str[0].toUpperCase() + str.slice(1, (str.length)).toLowerCase()
        answerArray.push(capStr)
    }
    answerArray.join(' ')
   const strAns = answerArray.toString().replaceAll(',', ' ')
    return strAns
}

module.exports = capitalize;

console.log(capitalize("a fat cat sat here"))
// console.log(capitalize("do you know my name?"))
// console.log(capitalize("another round!"))
