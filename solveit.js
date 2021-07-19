// const obj = [
//     {fname:"tushar", lname:"patil", mob: 99999999, city:"pune"}
// ];
// const personalArray=obj.map(function(element)
// {
// return ` first name is ${element.fname} and last name is ${element.lname} mobile no is ${element.mob} and city is ${element.city}`;
// })

// console.log(personalArray);

const mapAssignment=(obj)=>obj.map((item)=>

`iam planning to do ${item.course} from ${item.institute}situated at ${item.mobNo}` 
        
        
);
    
console.log(mapAssignment([{course:"html" , institute:"pdac",mobNo:89748734,city:"hyd"},
{course:"javascript" , institute:"cdac",mobNo:89748734,city:"pune"},
{course:" react" , institute:"naresh IT",mobNo:89748734,city:"banglor"}]));