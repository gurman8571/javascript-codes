class Animal
{

    constructor(name){
            
this.name=name;


    }
    get getName(){
        return this.name +" is animal";
    }
     
    text()
    {
        console.log("we all are creatures");
    }
        
        
    
};

//extend class syntax
class Bird extends Animal
{
constructor(name)
{
super(name);

}
get getName(){
    return `${this.name} is bird`;
}

properites () {
    console.log (this.name+" can fly");
    
}

};

let cow=new Animal('cow');
console.log(cow); 
let eagle=new Bird('eagle');
eagle.properites();
eagle.text();

//super keyword
 /* call constructor of parent */


