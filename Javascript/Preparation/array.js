// Problem 1 :- Find the maximum and minimum number in an array
let arr1 = [5, 2, 8, 1] // → Output: 8, 1
// findMaxMin(arr1);
function findMaxMin(arr){
    // let arr = [2, 11, 7, 15]
    // let sort = arr.sort((a, b) => a - b); 
    // let min = arr[0]
    // let max = arr[arr6.length - 1]
    // console.log(sort)
    // console.log(min, max)

    let max = arr[0];
    let min = arr[0];
    
    // console.log(arr.max(), arr.min())
    for(i=0; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
        if(arr[i] < min){
            min = arr[i];
        }        

    }

    
    console.log(object = {max, min})

} 


// Problem 2 :- Find the sum of all elements in an array
let arr2 = [1, 2, 3, 4, 5] // → Output: 6
// sumArray(arr2);
function sumArray(arr){
    let sum = 0;
    for(i=0; i<arr.length; i++){
        sum += arr[i]
    }
    console.log(sum)
}


// Problem 3 :- Remove duplicates from an array
let arr3 = [1,1,2] // → Output: [1,2], length 2
// removeDuplicates(arr3);
function removeDuplicates(arr){
    let dup = [];
    for(i=0; i<arr.length; i++){
        if(dup.includes(arr[i])){
            continue
        }else{dup.push(arr[i])}

    }
    console.log(dup, ", Length :" , dup.length)
        
}
    

// Problem 4 :- Rotate an array by k elements
let arr4 = [1,2,3,4,5], k=2 // → Output: [4,5,1,2,3]
// rotateArray(arr4, k);
function rotateArray(arr, k){
    let n = arr.length;
    k = k % n; // To handle cases where k > n
    console.log(k)
    let rotatedArray = arr.slice(n-k).concat(arr.slice(0, n-k));
    console.log(rotatedArray)
}

let arr5 = [2, 11, 7, 15], target=13 // → Output: [0, 1]
// twoSum(arr5, target);
function twoSum(arr, target){
    let map = new Map();
    // console.log(object = {})
    for(i=0; i<arr.length; i++){
        for(j=i+1; j<arr.length; j++){
            if(arr[i] + arr[j] === target){
                console.log(arr[i], arr[j]) // Output: 2, 7
                console.log(i, j) // Output: [0, 1]
            }
        }
    }
}






