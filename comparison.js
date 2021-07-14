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

// const BigNum=(num1,num2)=>
//     if(num1>num2){
//         return num1;
//         else
//         {
//             return num2;
//         } 

//     }
// }


// ...............using turnary operator ?..............

const BigNum=(num1,num2)=>(num1>num2)? num1:num2;
console.log(`bigger no=${BigNum(20,50)}`);