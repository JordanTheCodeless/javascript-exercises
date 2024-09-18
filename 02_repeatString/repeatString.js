

 function getRandomNumber(){
    return Math.floor(Math.random() * 1000);
}
const repeatString = function(repeat, num) {
   result = ""
   
  
    for(let i= 0; i<num; i++){
    result +=    repeat;
    }
    if (num>= 0){

        return result;
    }
    else{
        return "ERROR";
    }

}
repeatString('',10)

// Do not edit below this line
module.exports = repeatString;
