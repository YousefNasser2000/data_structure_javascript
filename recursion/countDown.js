function countDown(num){
    if(num <= 0){
        console.log("all done!");
        return  0 
    }
    console.log(num);
    num--
    countDown(num)  
}

console.log(countDown(5));
