//using faccotry func
function counter() {
    return {
        lectures: 0,
        inc: function() {
            this.lectures++;
        },
        dec: function() {
            this.lectures--;
        }

    }
}

let counter1 = counter();
counter1.inc();
counter1.inc();
counter1.inc();
counter1.inc();
counter1.dec();
console.log(counter1.lectures);