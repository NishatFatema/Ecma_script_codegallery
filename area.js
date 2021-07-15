
const areaOfCircle=(r)=>3.14*r*r;
console.log(`circle area ${areaOfCircle(50)}sq.unit`)

const x=20;const areaOfRectangle=(b,h)=>b*h;

console.log(`Area Of Rectangle:${areaOfRectangle(10,20)}`);

const areaOfTriangle=(b,h)=>1/2*b*h;

console.log(`Area Of triangle:${areaOfTriangle(10,20)}`);

const b=15;
const h=30;
console.log(`area of both together:${areaOfRectangle(x,b) + areaOfTriangle(b,h-x)}`);