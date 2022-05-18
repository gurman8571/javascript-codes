// for in loop
//iterates over an object
const person = {fname:"John", lname:"Doe", age:25}; 

let txt = "";

for (let x in person) {
  txt += person[x] + " ";
}

console.log(txt);

//example 2 for of
{
const numbers = [45, 4, 9, 16, 25];


for (let name of numbers) {
 
    console.log(name);
}


}
const numbers = [45, 4, 9, 16, 25];
//for each loop 
numbers.forEach((value,key) => {
    console.log(`${key+1}=> ${value}`);
});


const animal={
    name:'lion',
    age:54,
}
for (const value of Object.keys(animal)) {
    console.log(value,animal[value]);
}