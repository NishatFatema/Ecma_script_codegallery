// Fat arrow function
const compare=(num1,num2)=>{
    if(num1>num2){
       return("Bigger number :" +num1);
    }
    else {
    return("Bigger number :"+num2)
    }
}
console.log(compare(30,40));
console.log(`This is ${compare(30,40)}`);