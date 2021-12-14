console.log("hello world");
let fetchbtn = document.getElementById("fetchbtn");

fetchbtn.addEventListener("click", () => {
    //in tiate a xhr object
    console.log("btn clicked");
    const xhr = new XMLHttpRequest();
    //open obj
    xhr.open("GET", "https://dummy.restapiexample.com/api/v1/employees", true);

    // on progress(optional)
    // xhr.onprogress=()=>{
    // console.log("on progress");
    // }
    // display on load

    xhr.onload = function() {
        if (this.status == 200) {
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            let list = document.getElementById("list");
            let str = "";
            for (key in obj.data) {
                str += `<li>${obj.data[key].employee_name} </li>`;
            }
            list.innerHTML = str;

        } else {
            list.innerHtml = `Internal error occured${this.status}`;
        }
    };
    //send req
    xhr.send();
});