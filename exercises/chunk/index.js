// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// 0. declare function that accepts array parameter and size of subarray integer
// 1. declare an empty array that will serve as answer variable
// 2. iterate through the array with a loop, increasing the index by the size integer argument each time
// 3. create a subArray variable by slicing the paramater array in size scale to the offered integer
// 4. push this subarray into the answer array
// 5. return the answer array

function chunk(array, size) {
    const answerArray = []
    for (let i = 0; i < array.length; i += size) {
        const subArray = array.slice(i, i + size)
        answerArray.push(subArray)
    }
    return answerArray
}

module.exports = chunk;

console.log(chunk([1, 2, 3, 4], 2))
console.log(chunk([1, 2, 3, 4, 5], 2))
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3))
console.log(chunk([1, 2, 3, 4, 5], 4))
console.log(chunk([1, 2, 3, 4, 5], 10))
