function factorial(num){
    // it is a function that accepts a number and find its multiplication until reaching 1
    // it takes only one input and must be bigger than 1 
    // function returns an int number resulted from mltiplaing 
    // factorial(5) => 5 * 4 * 3 * 2, multplying by 1 is idenitcal
    if (num <= 1) return 1 
    return num * factorial(num - 1) 
}

console.log(factorial(0));
