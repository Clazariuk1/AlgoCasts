// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const fq = {}
    let tempMax = 0
    let trueMax = ''

    for (let char of str) {
        fq[char] = (fq[char] || 0) + 1
    }

    for (let key in fq) {
        if (fq[key] > tempMax) {
            tempMax = fq[key]
            trueMax = key
        }
    }
    return trueMax
}

console.log(maxChar("abcccccccd")) // === "c"
console.log(maxChar("apple 1231111")) // === "1"


module.exports = maxChar;
