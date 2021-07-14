function even(num){
var num;

if(num%2==0)
    {
    return num;
    }   
else{
    return 0;
    }
}
console.log("Result:"+even(12));

// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

function evenNumberFinder(num){
    if(num%2==0){
        return true;
        }
     else{
         return false;
     }  
}
console.log(evenNumberFinder(88));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


const evenNumFinder=(num)=> (num%2==0? true:false);

console.log(evenNumFinder(7777));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const evenNumberFinder1=(num)=>(num%2===0);
console.log(evenNumberFinder1(7777));

// *******************************************************

const evenNum=(number)=>(number%2===0?"Even":"odd");
console.log(evenNum(7777));
