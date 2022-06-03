//eg-1>
let p=new Promise((resolve, reject)=>{
let a=1+3;
if(a == 2){
    resolve('success')
}
else{
    reject("failed")
}

} )

p.then((message)=>{
console.log(message);
}).catch((message)=>{
    console.log(message);
})

//example 2

let flag=false;
let p2=new Promise((resolve, reject)=>{
    
    if(flag){
    resolve({
        status:'user joined',
        message:'we added the user'
    })
    }
    else{
        reject({
            status:'user left',
            message:'we missed thw user'
        })
    }
    
    } )
p2.then((message)=>{
console.log(`great success ${message.status} ${message.message}`);

}).catch((message)=>{
    console.log(`oops ${message.status} ${message.message}` )
})