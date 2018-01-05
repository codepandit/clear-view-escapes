var $ = require("jquery");
import Person from "./modules/Person";

class Adult extends Person {
  paytaxes() {
    console.log(this.name + " owes $0");
  }
}

var nik =  new Adult("Nikhil Mehral", "orange");
nik.greet();
nik.paytaxes();

var ac =  new Person("Alysha Cooper", "green");
ac.greet();

//$("h1").remove();
