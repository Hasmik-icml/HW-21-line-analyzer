class Stack {
  constructor() {}
  brackets = [];
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
  ckeck(string) {
    for (let i = 0; i < string.length; ++i){
      let s = this.brackets[this.brackets.length-1];
      if (this.openBracket(string[i])){
        this.brackets.push(string[i]);
      } else 
      if (this.closeBracket(string[i])){
        if (this.currectBracket(s, string[i])){
          this.brackets.pop();
        } else
        return false;
      } 
    }
    return this.brackets.length ? false : true;
  }
}
const newStack = new Stack();
// console.log(newStack);
console.log(newStack.ckeck("[(({))]"));
