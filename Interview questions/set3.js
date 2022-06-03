//promises.all implementtaion 

let flag1=true;
let p1 =new Promise((resolve,reject)=>{

if (flag1 ) {
    resolve('resolved p1')
}
else{
    reject('p1 rejected')
}

})

let flag2=true;
let p2=new Promise((resolve,reject)=>{

    if (flag2 ) {
        resolve('resolved p2')
    }
    else{
        reject('p2 rejected')
    }
    
    })

//if one fill all falls
    Promise.all([p1,p2,Promise.resolve('ji')]).then((result)=>{

        console.log(`${result}`);
    }).catch((error)=>{
console.log(error);
    })

    // 2 implement logically
    const calc={
      total:0,
       add(a){
       this.total+=a;  
           return this;  
    },
    mul(a){

        this.total*=a;  
        return this; 
    },
           sub(a){
            this.total-=a;  
            return this; 
           },
      
    }
    const result=calc.add(10).mul(5).sub(30).add(10);
    
    console.log(result.total);

    //3,
