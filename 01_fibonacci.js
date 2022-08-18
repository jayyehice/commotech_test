"use strict"
console.log('第一題結果');


function fibonacci(i){

    if(i<0){
        return "error";
    }else{

        if(i==0){
            return 0;
        }else if(i==1){
            return 1;
        }else{
            return fibonacci(i-1)+fibonacci(i-2);
        }
    }
}

let position = 4;

console.log("fibonacci("+position+") = "+fibonacci(position));