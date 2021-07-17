// const fencingForAny = (edges, numberofwires, rate)=>{
    
//     for(let i=0;i<edges.length;i++) {

//         console.log(`i=${i},value=${edges[i]}`);

//     }

// };
// console.log(fencingForAny([30,20,30,20],5,10));

// ----------sum---------------

// const fencingForAny = (edges, numberofwires, rate)=>{
//     let sum=0;
//         for(let i=0;i<edges.length;i++) {

//             sum=sum+edges[i];
//         }
//     return sum*numberofwires*rate;
// };

//     console.log(fencingForAny([30,20,30,20],5,10));

const fencingForAny = (edges , numberOfwires, rate)=>{
    let sum = 0 ;

    edges.foreach((element)=>{

        return sum = sum + element;
    });

    return sum*numberOfWires*rate;
};


