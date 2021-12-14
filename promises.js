//async js progrmming
//array of objects
let data = [{
    name: 'gurman',
    age: 21
}, {
    name: 'dama',
    age: 17
}]

function getdatas() {
    setTimeout(() => {
        let ops = '';
        data.forEach((data, index) => {
            ops += `<li>${data.name}<\li>`
        });
        let ul = document.querySelector('ul')

        document.body.innerHTML = ops;
    }, 1000);


}

function createdata(params) {
    //e.preventDefault();
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data.push(params)
                //callback() //now we are calling func after pushing data
            let error = false;
            if (!error) {
                resolve();
            } else {
                reject('error');
            }
        }, 2000);


        //this is not pushed as get data is called in 1 s and this is called 
        //in 2 sec our page get refreshed so to call this fun we use async prog 
    })

}

// promises
/*
take 2 params resolve reject
*/
/*
createdata({ name: "xyz", age: 39 }).then(getdatas);
*/

//async,await
async function start() {
    await createdata({ name: "xyz", age: 39 });
    getdatas();
}
start();