//exercise 1 object square with area func
let square = {
    side: 5,
    get area() {

        let area = (this.side ** 2)
        return area;

    },
    get volume() {

        let vol = (this.side ** 3)
        return vol;

    }



}
console.log(square.side);
console.log(square.area);
console.log(square.volume);


// ex-2 implement arr jpoin fun 

//rest opertaor to study 
function stringconcat(seperator, ...strings) {
    let string = '';
    for (let index = 0; index < strings.length; index++) {
        if (index === strings.length - 1) {
            string += strings[index];
        } else {
            string += strings[index] + seperator;
        }

    }
    return string;
}


console.log(stringconcat('+', 'g', 'u', 'r', 'm'));

// exercise3

//our task is to make 4 arrays 1 store 1st ele 2nd store second ele  3rd store 3rd ele and 4th store all ele left

//we have to do with destruccturing

let [first, second, third, ...rest] = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(first);
console.log(second);
console.log(rest);

// exercise 4
//task is to calc mathsticks used to make houses 1 take 6  87-436  2-11 4-21

function calcmathstciks(house) {

    if (house <= 0) {
        return 0;
    } else {
        return (house * 5 + 1)
    }

}
console.log(calcmathstciks(1));
console.log(calcmathstciks(87));
console.log(calcmathstciks(4));
console.log(calcmathstciks(0));