function validAnagram(str1, str2){
  // add whatever parameters you deem necessary - good luck!
  
  if(str1.length !== str2.length){
    return false 
  }

  let stringIntoObject = {}
  for(val in str1){
    let letter = str1.charAt(val) 
    stringIntoObject[letter] ?  stringIntoObject[letter] += 1 : stringIntoObject[letter] = 1
  }


  for(val in str2){
    let letter = str2.charAt(val) 
    
    if(!stringIntoObject[letter]){
        return false
    }else {
        stringIntoObject[letter] -= 1
    }
    
  }
  return true

}


console.log(validAnagram('me', 'mu'));
