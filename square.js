// const squareOfnumbers=(numbers)=>{
//     let square = [];

//     numbers.forEach((element)=>{
//         square.push(element**2)

//         });
        
//         return  square;
// }

//     console.log(squareOfnumbers([5,2,7,9,10]));

// >>>>>>>>>>>>>>>>>square of array>>>>>>>>>>>>

// const squareOfarray = (numbers)=> numbers.map((element)=>element**2);
// console.log(squareOfarray([5,2,7,9,10]));

// ..................cube of array..................

const cubeOfarray = (numbers,power)=> numbers.map((element)=>element**power);
console.log(cubeOfarray([5,2,7,9,10],3));



