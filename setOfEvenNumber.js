// const setOfEvenNumber= (number) =>{
//     let sum = 0;
//     number.forEach((element)=>{
//         element % 2==0 &&(sum = sum + element)

//     });

//     return sum;

// };

// console.log(setOfEvenNumber([5,2,7,9,10,8,17,115,10]));

const setOfEvenOdd=(numbers)=>{
    let sumEven=0;
    let sumOdd=0;

    numbers.forEach((element)=>{
        element % 2 == 0 
        ?( sumEven= sumEven + element)
        :( sumOdd= sumOdd + element) ;
    });
    return `sum of even numbers:${sumEven} and  sum of odd numbers:${sumOdd}
    total sum= ${sumEven + sumOdd}`; 

};
 console.log(setOfEvenOdd([5,2,7,9,10,8,17,115,10]));
    
