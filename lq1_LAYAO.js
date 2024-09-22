var persona1name = "Maria Delos Santos Las Marias";
var persona1age = 25;
var persona1address = "Upper Session Road, Baguio City, Benguet";

var persona2name = "Juan Gamoso Dela Cruz";
var persona2age = 28;
var persona2address = "San Nicolas, Candon City, Ilocos Sur";

var p1nameRearrange = persona1name.split(" ");
var p2nameRearrange = persona2name.split(" ");

const p1namelength = persona1name.length; //length persona1 name
const p2namelength = persona2name.length; //length persona2 name
const p1addlength = persona1address.length; //length persona1 address
const p2addlength = persona2address.length; //length persona2 address

let sumOfall = persona1age + persona2age + p1namelength + p2namelength + p1addlength + p2addlength; //Sum of all numeric values
let p1Addp2 = persona1age + persona2age; //Add the persona1age to the persona2age
let subtractp1 = p1Addp2 - p1namelength;//Subtract the persona1 name from "p1namelength"
let multiplyp2 = subtractp1 * p2namelength;//Multiply the persona2 name to "p2namelength"
let p1ToThePowerp2 = p1addlength ** p2addlength;//Raise the length of persona1 address length to the power of persona2 address


//  these are the rearrange and split persona name
console.log("Name: ",p1nameRearrange[3].toUpperCase(), p1nameRearrange[4].toUpperCase()+",", p1nameRearrange[0] , p1nameRearrange[1] , p1nameRearrange[2]+",", "Age: ",persona1age,"Adrdress: ", persona1address);
console.log("Name: ", p2nameRearrange[2].toUpperCase() , p2nameRearrange[3].toUpperCase()+",", p2nameRearrange[0] , p2nameRearrange[1]+",", "Age: ",persona2age, "Address:", persona2address);


// this is the answer to the e. operations.
console.log(sumOfall);
console.log(p1Addp2);
console.log(subtractp1);
console.log(multiplyp2);
console.log(p1ToThePowerp2);
