const areaOfCircle=(r)=>3.14*r*r;
const areaOfRectangle=(b,h)=>b*h;
const areaOfTriangle=(b,h)=>1/2*b*h;


const h=14;
const x=12;
const b=27;
const r1=7;
const r2=5;

console.log(`area of whole figure : ${1/2*areaOfCircle(r1) + areaOfRectangle(b-r1,h) + areaOfTriangle(b-r1,x)- areaOfCircle(r2)}`);




