function countUniqueValues(arr){
    let unique = []
    let left = 0 

    for ( let right = 1; right < arr.length ; right++){
        if (arr[left] !== arr[right]){
            left++
            arr[left] = arr[right]
        }
    }
    return left + 1
}

console.log(countUniqueValues([1,2,3,4,4,6]));
