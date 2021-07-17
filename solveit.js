const obj = [
    {fname:"tushar", lname:"patil", mob: 99999999, city:"pune"}
];
const personalArray=obj.map(function(element)
{

return ` first name is ${element.fname} and last name is ${element.lname} mobile no is ${element.mob} and city is ${element.city}`;
})
console.log(personalArray);