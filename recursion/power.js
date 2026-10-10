// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(base, exponent){
    if (exponent === 0) {
        return 1
    }
    if (exponent === 1) return base
    
    function helper(helperInput){
        return helperInput * helperInput
    }
    console.log(helper(base));
    
    exponent--
    let result = 0
    return result = helper(base) * helper(base)
    
}

console.log(power(2,2));


