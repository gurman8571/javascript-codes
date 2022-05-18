// promises are a substitution to callbacks as callbacks are confusing 
let stocks={
    Fruits:['stawberry','grapes','banana','orange'],
    toppings:['choco-chips','gems'],
    holder:['cone','cup']
    
    }
let is_open=true;

    let order=(time,work)=>{

      return new Promise((resolve,reject)=>{
          if (is_open) {
            setTimeout(() => {
                resolve(work())  

            }, time);
          }
else{
    reject(console.log('shop closes'));
}

      })

    }

order('2000',()=> console.log(`order placed for ${stocks.Fruits[1]} icecream`))
.then(()=>{return order(0000,()=> console.log('production started'))})
.then(()=> {return order(2000,()=>{ console.log('cutting started')})})
.then(()=> {return order(1000,()=>{ console.log('machine started')})})
.then(()=>{
    return order(1000,()=>{ console.log(`holer ${stocks.holder[1]} selected`);})
})
.then(()=> {return order(2000,()=>{ console.log(`toppings ${stocks.toppings[1]} selected`);})})
.then(()=> {return order(1000,()=>{ console.log('ice cream served')})})
.catch(()=> console.log('customer left') )
//finally handler
.finally(()=> console.log('day ended') )//run even if promise resolved or rejected 