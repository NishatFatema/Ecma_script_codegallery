
------- milage=km/lit ---- fuelprice=rs/liter---------
const MillageCost=(distance,Milage,fuelPrice)=>

(distance / Milage ) *fuelPrice;

console.log(`amount need to fuel fill is ${MillageCost(303,37,110.08)}`);

// .........................math.ceil for rounding of value towards up..............

const MillageCost=(distance,milage,fuelPrice)=>
Math.ceil((distance /milage * fuelPrice));
console.log(`amount need to fuel fill is ${MillageCost(303,37,110.08)}`);

