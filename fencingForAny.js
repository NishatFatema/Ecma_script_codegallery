const fencingForAny=(edges,numberOfWire,rate)=>{

    
    const edge=100;
    const numberOfWire1=5;
    const rate1=10;
    const totalCost=edges*numberOfWire*rate;
    return totalCost;
    
};

console.log(`fencingForAny:${fencingForAny(edge,numberOfWire1,rate1)}`);