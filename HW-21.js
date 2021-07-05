const stack = require("./HW-21-lineAnalizer");

try {
  console.log(stack.newStack.ckeck("{}]"));
}
catch(error){
  console.log(error.message);
}
console.log("You must enter the valid brackets.");