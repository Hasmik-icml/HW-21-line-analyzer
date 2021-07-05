class Brackets{
  constructor (){}
  openBracket(val) {
    return val == "(" || val == "{" || val == "[";
  }
  closeBracket(val) {
    return val == ")" || val == "}" || val == "]";
  }
  currectBracket(val1, val2) {
    if (val1 == "(" && val2 == ")"){
      return true;
    }
    if (val1 =="{" && val2 == "}"){
      return true;
    }
    if (val1 == "[" && val2 == "]"){
      return true;
    }
  }
}

class Stack {
  constructor() {}
  brackets = [];
  newbrackets = new Brackets();
  ckeck(string) {
    for (let i = 0; i < string.length; ++i){
      let s = this.brackets[this.brackets.length-1];
      if (this.newbrackets.openBracket(string[i])){
        this.brackets.push(string[i]);
      } else 
      if (this.newbrackets.closeBracket(string[i])){
        if (this.newbrackets.currectBracket(s, string[i])){
          this.brackets.pop();
        } else
        throw new Error("Invalid brackets");
      } 
    }
    if (this.brackets.length) {
      // return false;
      throw new Error("Invalid brackets");
    } else {
      return true;
    }
    // return this.brackets.length ? throw new Error("Invalid brackets"): true;
  }
}

// const newStack = new Stack();
module.exports = {
  newStack: new Stack()
}
// console.log(newStack);
// console.log(newStack.ckeck("[(())]{"));
