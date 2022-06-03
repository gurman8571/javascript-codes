/**
 1.diff bw lwt var const
 */
//1 scope of var is global let const has block scope

//2 reintialization
var old=10;
var old=5;
console.log(old);
//in case of let and const  it gives error

/*let a=10;
let a=5;
console.log(a);//syntax error a alrready declared

*/

//3.var and let can be redeclared but const cant
var a=10;
a=5;
console.log(a);
old=12;
console.log(old);
const b=10;
//b=4;
//console.log(b);//type error assignmnt to const var


//4.Hoisting 


console.log(var_variable);//undefined
var var_variable=10;

//console.log(let_variable);//refrence error cant be accessed before intialization hosted in temporal deaadzone
let let_variable=10;

//5.
{
let  a;
//const b; syntax error missing intializer in const
var c;
}         


//que 2->setimeout based imp question
{
const a = function() {
    for (var index = 0; index < 6; index++) {
         
                
        setTimeout(function(index) {

            console.log(index);
        }, index*1000);
    }
}
a();//op->6 6 6 6 6 6 aftwe 1 sec each
//sol
}

    const STO = function() {
        for (var index = 0; index < 6; index++) {
             
             // ALAWAYS CREATE NEW COPY OF I AND PASS       
             function close(i) {
                setTimeout(function() {
    
                    console.log(i);
                }, i*1000);
               
               }
               close(index);
              
        }
    }
    STO();//op->6 6 6 6 6 6 aftwe 1 sec each
    //sol

    //3.GIVE C COMPOSE POLYFILL FOR FOLL

    function addfive (a) {  
        return a+5;
    }

    function subtwo (a) {  
        return a-2;
    }
     
    function mulfour (a) {  
        return a*4;
    }
const compose=(...functions)=>{
return(args)=>{
    return functions.reduceLeft((arg,fn)=>fn(arg),args)
}
}
    console.log(compose(addfive,subtwo,mulfour)(5));  //23
               //20
               //20-2
               //18+5
              //23ans

              
//Promises.all
