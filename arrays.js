const array=[1,2,3,4,5,6,7,8,9,5]
;
array.push(10);
array.unshift(0);
console.log(array.length);
for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
    
}
array.pop();
array.shift()
for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
    
}
array[0]=100;
console.log(array[0])
console.log(array.indexOf(5));
console.log(array.lastIndexOf(5));
console.log(array.includes(10));
//aray of objects
let food=[

    {
        name: 'burger',
        cost:200
    },
    {
        name:'pizza',
        price:300

    }

];
//to find use find method
console.log(food.find((x)=>{
return x.name ==='burger'
}));//func which returns the object which passes the test

