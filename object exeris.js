//ex1->//make an object
//using constructor
function Item(name,price,discount,code) {
    
this.name=name;
this.price=price;
this.discount=discount;
this.code=code;

this.discountval = ()=> {

    let disc=(this.price-this.discount);
    return disc;
}

}
 let fridge=new Item("fridge",30000,2000,"se34");
 console.log(fridge);
 console.log(fridge.discountval());

//using factory func
function createitem(name,price,discount,code) {
    return{
    name    :  name,
    price   :  price,
    discount:  discount,
    code    :  code
    }
    
    }
    const lcd=createitem('lcd',20000,2300,"hj56");
    console.log(lcd);