                                                            //functions questions 
/*theory 
1.func exrpesion vs func statement
2.first class functions 
3.what is iife 
*/
//1.iife 
{(function (param) {
    console.log(param*param);
     })(5)}
  //op->25
  //closures in iife
 
{
  (function (x) { 

    return (function (y) {
            console.log(x*y);
    })(2)
   })(3)
}
  //this is iife
//2.important questions 
for (let index = 0; index < 5; index++) {
    setTimeout(() => {
        console.log(index);
    }, index*1000);
    
}
//op->0,1,2,3,4,5
//3 .hoisting inside function

var x=21;
function abc() {
 console.log(x);
 var x=20;    
}
abc();
//op->undefined becauser x is hoisted inside func
//4.rest vs spread opertaot

//spread 
function ab(param1,param2) {
    console.log(param1*param2);
    
      }
      var num=[10,2];
    ab(...num);//spread opertaor we are spreading a array and pass
    //op->20
//rest operator

function rest(...param) {//convert ip in array
    console.log(param);
    
      }
      var num=[10,2];
    rest(10,20,30);
    //op->[10,20,30]

    //5.question on spread and rest operator
    function abcd(a,b,c,...nums) {

        console.log(c);
      }
      abcd(10,20,30,40);
      //op->30
