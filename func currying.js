// que on infinte currying

function sum(a) {
   
 return function(b){
       
    if(b){
        //call sum with addition of 2 nos
        return sum(a+b)
    }
 else{
     //else return a at that point
     return a;
 }
 }

    
}
const ans=sum(2)(3)(5)(7)(8)();
console.log(ans);

//dom manipulationg using cyrry
//we will create a func to change content of a div by passing content and id 
function changecontent(id) {
    return function (content) {
        document.getElementById(id).innerHTML=content;      
    }
}

changecontent("curry")("hi gurman")
changecontent("curry2")("hi gurman2")