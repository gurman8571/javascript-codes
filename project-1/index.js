let form = document.getElementById("addhero");
var tabletag = document.querySelector('table'); //consrtuctor
function Hero(name, power) {

    this.name = name;
    this.power = power;

}
//display 
tablebody = document.getElementById("tbody");

function Display() {

    this.clear = function() {
        form.reset();
    }
    this.add = function(hero) {
        //console.log("addinf");

        tablebody = document.getElementById("tbody");
        let ui = ` <tr class="p-4 m-4 mb-4">

                   <td>${hero.name}</td>
                   <td>${hero.power}</td>
                   <td><button type="button" class="bg-red-500 p-2 rounded-md text-white" id="delete" onclick="del(this)" > remove</button> </td>

</tr>


`

        tablebody.innerHTML += ui;


    }
    this.validate = function(hero) {
        if (hero.name == "" || hero.power == "") {
            return false;
        } else {
            return true;
        }

    }
    this.alert = function(type) {

        let msg = document.getElementById('message')
        if (type == 'error') {


            msg.innerHTML = `  <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
Danger
</div>
<div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
<p id="message">name or power is empty.</p>
</div>`
        }

        if (type == 'success') {


            msg.innerHTML = ` <div class="bg-yellow-500 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
        <p class="font-bold">Suceess!</p>
        <p>new superhero added.</p>
      </div>`
        }

        setTimeout(() => {
            msg.innerHTML = ''
        }, 5000);
    }

}


form.addEventListener("submit", function(e) {
    let name = document.getElementById('name').value;
    let power = document.getElementById('power').value;

    let hero = new Hero(name, power);

    console.log(hero);
    let display = new Display();

    if (display.validate(hero) == true) {
        display.add(hero);
        display.clear();
        display.alert('success')
    } else {

        display.alert('error');
    }



    e.preventDefault();






})

function del(currenttask) {

    currenttask.parentElement.parentElement.remove();



}