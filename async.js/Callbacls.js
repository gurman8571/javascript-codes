//let a ice cream corner  the relation between 2 is that only production is trted when order is recieved 
/*
steps-
1.place order 
2.start productiom
3.process flavour-2 sec
4.add water ice-1 sec
5.start machine-1sec
6.select container-2
7.select topping-3 s
8.serve-2 sec

*/
//creating an object of stocks
let stocks={
Fruits:['stawberry','grapes','banana','orange'],
toppings:['choco-chips','gems'],
holder:['cone','cup']

}

let order=(fruit,call_production)=>{

setTimeout(()=>{
    console.log(`order placed ${stocks.Fruits[fruit]} is the selected flavour`);
    call_production();
},2000)
//call_production();this should be second step but we want first step to be printed first
// to get it fixed call it inside set timeout
}
let production=()=>{
    //callback hell
   setTimeout(() => {
       console.log('production started');
       setTimeout(() => {
           console.log("flavour is added ");
           setTimeout(() => {
               console.log('water ice added');
               setTimeout(() => {
                   console.log("machine started");
                   setTimeout(() => {
                       console.log(`${stocks.holder[0]} selected`);
                       setTimeout(() => {
                           console.log(`${stocks.toppings[0]} added on cone`);
                           setTimeout(() => {
                               console.log('ice cream ready to be served');
                           }, 2000);
                       }, 3000);
                   }, 2000);
               }, 1000);
           },1000);
       }, 2000);
   }, 0000);
}
order(3,production);