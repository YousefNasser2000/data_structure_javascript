// Write a function that finds the first number in array that results in zero for the first index. 
// Assume that the list is sorted assendingly. 

function sumZero(arr){
    let isZero = 0
    for(let i = 0; i < arr.length; i++ ){
        for (let j = 0; j < arr.length; j++) {
            isZero = arr[i] + arr[j]
            if (isZero === 0) {
                return [arr[i], arr[j]]
            }
            
        }
    }
    return undefined
} 

// console.log(sumZero([-3,-2,-1,0,1,2,4]));

function sumZero1(arr){
    let left = 0 
    let right = arr.length -1 

    while(left < right){
        let sum = arr[left] + arr[right]
        if (sum === 0) {
            return [arr[left] , arr[right]]
        }else if(sum > 0){
            right--
        }else{
            left++
        }
    }
}

console.log(sumZero1([-3,-2,-1,0,1,4]));

// -3 + 4 = 1 => right becomes 1
// -3 + 1 = -2 => left become -2
// -2 + 1 = -1 => left become -1 
// -1 + 1 = 1 => return 

