// const fencingforRect=(b,w,numberOfWires,constPerFeet)=>{
// const parimeter = b + w + b + w;
// const totalCost = perimeter*numberOfWires*constPerFeet;
// return totalCost;
// };
// console.log(`Total cost for Fencing is Rs.${fencingforRect(40,70,7,12)}`);

// --------fencing for tri----------

const fencingforTri=(h,b,a,numberOfWires,constPerFeet)=>
{
    const perimeter = h + b + a;
    const totalCost = perimeter*numberOfWires*constPerFeet;
    return totalCost;
    };
    console.log(`Total cost for Fencing is Rs.${fencingforTri(10,12,18,5,10)}`);