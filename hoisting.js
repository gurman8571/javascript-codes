/*in normal pg lang
var x = 101;

function name() {
    console.log("gurman");
}
console.log(x);
name();
*/
//in js
name(); //op-gurman in js we get op before intialising func
console.log(x1); //undefined but in other pg lang we get error
var x1 = 102;

function name() {
    console.log("gurman");
}
//this is called hoisting i.e not getting error without intialising func/var
