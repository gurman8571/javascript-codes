/*
1.global var=attached with window object(formed when we run code)
2.local scope= 
3.block(introduced in es6)=let,const
4.lexical scope
*/

//local level scope is
function o() {
    var x = 1001;
    console.log(x);

    function t() {
        var x = 102; //x have local scope
        console.log(x);
    }
    t();
}

o();
//block level scope
var x1 = 10; {
    // this override the value of x1 if we use var 
    //var x1 = 101
    //if we use let,const the scope become block level of x=101 only in this block   
    let x1 = 101;
    console.log(x1);

}
console.log(x1);

//lexical scope
function gparent() {
    var name1 = "a";

    function parent() {
        console.log(name1);

        function child() {

            var name = "k";
        }
        child();
    }
    parent();
}
gparent();


// scope
let foo="1";
function foobar() {
    
}



