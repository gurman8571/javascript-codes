function outermost() {
var b=20;
    function outer(){

        let a=10;
            function inner(){
        
               console.log(a,b);
        
        
            }
            return inner;
        }
        return outer;
    
}
outermost()()();
//b is hided 
//console.log(b);
