var myVar = "global";

function myFunction() {
  var myVar = "local";

  console.log(myVar); // prints "local"
}
myFunction();
console.log("myVar is:", myVar);  // prints "global"