// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

// [0]


function bubbleSort(arr){
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < (arr.length - i - 1); j++) {
      if (arr[j] > arr[j + 1]) {
        const lesser = arr[j + 1]
        arr[j + 1] = arr[j]
        arr[j] = lesser
      }
    }
  }
  return arr
}

function insertionSort(arr){
  for(let i = 1; i < arr.length; i++){
    let currentNum = arr[i]
    let j = i - 1
    while(currentNum < arr[j]){
      const checkValue = arr[j];
      arr[j] = currentNum;
      arr[j + 1] = checkValue;
      j--;
    }
  }
  return arr
}



function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexOfMin = i

    for (let j = i+1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j
      }
    }

    if (indexOfMin !== i) {
      let lesser = arr[indexOfMin]
      arr[indexOfMin] = arr[i]
      arr[i] = lesser
    }
  }
  return arr
}

function mergeSort(arr) {
  if (arr.length <= 1){
    return arr
  }

  const centerPoint = Math.floor(arr.length / 2) // 7/2 = 3.5
  const left = arr.slice(0,centerPoint);
  const right = arr.slice(centerPoint);

  return merge(mergeSort(left), mergeSort(right))

}

function merge(left, right) {
    const results = [];

    while(left.length && right.length){
      if(left[0] < right[0]){
        results.push(left.shift())
      } else {
        results.push(right.shift())
      }
    }

    return [...results, ...left, ...right]
}


// [3, 7, 9, 2, 14, 5, 13, 22]

[3,7,9,2,5,13],14,[22]
[3,7,9,2,5,13]
 2,3,7,9,5,13
 [3,7,9]
// 4[]            //4[]
// 2[] 2[]        // 2[] 2[]
// 1[] 1[] 1 [] 1[]  // 1[] 1[] 1[] 1[]


function quickSort(arr){
 if(arr.length < 2){
   return arr
 }
 const midpointIndex = Math.floor(arr.length/2);
 const pivot = arr[midpointIndex]
 const myLeftArr = [];
 const myRightArr = [];

 for(let i = 0; i < arr.length; i++){
  if(i !== midpointIndex){
    arr[i] < pivot ?
      myLeftArr.push(arr[i]):
      myRightArr.push(arr[i]);
  }
 }
 return [...quickSort(myLeftArr), pivot, ...quickSort(myRightArr)]
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge, insertionSort, quickSort };
