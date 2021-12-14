console.log("hello world");
let postbtn = document.getElementById("postbtn");
postbtn.addEventListener("click", () => {
  //intiate a xhr object
  console.log("btn clicked");
  const xhr = new XMLHttpRequest();
  //open obj
  xhr.open("POST", "http://dummy.restapiexample.com/api/v1/create", true);
  xhr.getResponseHeader('Content-type','application/json'); 
  // on progress(optional)
  // xhr.onprogress=()=>{
  // console.log("on progress");
  // }
  // display on load

  xhr.onload = function () {
    if (this.status == 200) {
      console.log(this.responseText);
    } else {
      console.log(`Internal error occured${this.status}`);
    }
  };
  //send req
  params=`{"name":"test","salary":"123","age":"22"}`;
  xhr.send();
});
