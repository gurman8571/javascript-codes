// hof=>
// func which takes another func as a arg or return a func as op 
//array map
const arr = [1, 2, 3, 4, 5, 6];
const op = arr.map((x) => {

    return x * 2;
})
console.log(op); //we get doubled array from

//array filter
const op2 = arr.filter((x) => {

    return x > 4;

})
console.log(op2); //we get filtrerd array as per condition

// arr reduce
const op3 = arr.reduce((acc, curr) => {
    acc += curr;
    return acc;
}, 0);
console.log(op3);
//arr reduce to find max value
const op4 = arr.reduce((max, curr) => {
    if (curr > max) {
        max = curr;
    }
    return max;
}, 0);
console.log(op4);