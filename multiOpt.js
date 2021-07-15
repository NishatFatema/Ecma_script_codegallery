const biggerMultiOPt = (num1,num2,num3,num4)=>{
    let bigNum=0;
    bigNum = (num1>num2) ? num1:num2;
    bigNum = (bigNum>num3) ?bigNum :num3;
    bigNum = (bigNum>num4) ?bigNum :num4;

    return bigNum;
};
console.log(`Bigger number is :${biggerMultiOPt(10,15,20,25)}`);

// -----------------bigger number------------------------

// const biggerMultiOPt = (num1,num2,num3,num4)=>{
//  Math.abs(num1,num2,num3,num4)
// };
// console.log(`Bigger number is : ${biggerMultiOPt(10,15,20,25)}`);

