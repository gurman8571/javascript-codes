//apply method

function getage(a, b) {

    console.log(this.name + a + b);
}

let obj = {
    name: "gurman",
    age: "21",
    details: function() {

        console.log(this.age);
    }

}
let obj2 = {
        name: "daman",
        age: "12",



    }
    //now to call same func for obj 2
obj.details.call(obj2); //call to a func of other obj this is scalled func borrowing
getage.call(obj, "h", "j");


//apply func
//to pass all arguments in call func pass it in arraylist instead of individual this is only diff betweeb calll,apply
getage.apply(obj2, ["h", "j"]);

//bind function
//just like call but unlike call not cleed directly we create copy and when neede call it
let newfun = obj.details.bind(obj2);
newfun();