//in simple int string value is passed by value
let num1=10;
let num2=num1;
num1=4;
console.log(
    num1 //op-4
);
console.log(num2);//op-10
 //in objects is passed by refrence
let obj1={num:12}
let obj2=obj1;
obj1.num=18;
console.log(
    obj1 //op-18
);
console.log(obj2);//op-18
//to pass by value in objects
//method 1
let obj3={num:12}
let obj4={ ...obj3};
obj3.num=15;
console.log(
    obj3 //op-15
);
console.log(obj4);//op-12
//method2
let obj5={num:11}
let obj6 =Object.assign({},obj5);
obj5.num=19;
console.log(
    obj5 //op-19
);
console.log(obj6);//op-11
//method 3
for (const key in obj) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}