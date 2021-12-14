class Animal
{

    constructor(color,name,legs){
            
this.name=name;
this.color=color;
this.legs=legs;

    }
    get getColor(){
        return this.color;
    }
    set setWeight(value){
        this.weight=value;
        
    }  
        
        
    
};
let lion=new Animal('yellow','lion',4);
console.log(lion.getColor); 

lion.setWeight=`100 kg`;
console.log(lion.weight); 





