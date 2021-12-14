//making objects
//in js every thing is object functions are also objects
//factory func
function course(teachers,lectures,intro){
return{
     lectures:lectures,
     teachers:teachers,
     notes:{
         intro:intro
     },


}
}
const jscourse=course(2,3,"hi this is js course")

//construct
function Course(title,teacher)
{
 this.title=title,
 this.techers=teacher   
}
const pythoncourse=new Course('python','gurman');
console.log(pythoncourse.title);
//delete keyword
delete(pythoncourse.title);
console.log(pythoncourse.title);
console.log(pythoncourse.constructor);//gives constructor 
console.log(jscourse.constructor);//construcotr is object func in js engine 
let number=10;
