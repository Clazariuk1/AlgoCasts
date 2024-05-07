// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    // create an array which contains the root node and placeholder variable which will note when the level of the tree terminates
    const arr = [root, 's']
    // initialize the answer array variable. A new integer element will be added for each level as we go. The integer will increment one up each new discovery on the level.
    const counters = [0]

    // create a while loop that will continue to remove the first element from the array for evaluation
    while(arr.length > 1) {
        const node = arr.shift()

        // create a conditional. If we hit the placeholder variable, we will do several things. 1: Put the placeholder BACK into the array, 2: add a new zero integer element into the answer array.
        if (node === 's') {
            counters.push(0)
            arr.push('s')
        }
        // OR, if we hit a true node and not the placeholder, we will... 1: push ALL children of this node into the array. 2: increment the current element of the answer variable by one.
        else {
            arr.push(...node.children)
            counters[counters.length - 1]++
        }
    }
    // When we have completed all traversals, return the answer variable.
    return counters

}

module.exports = levelWidth;
