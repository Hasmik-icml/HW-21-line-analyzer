class Stack {
  constructor(){}
  brackets = [];
  push(val){
    this.brackets.push(val);
  }
  pop(){
    return this.brackets.pop();
  }
  isEmpty(){
    return this.brackets.length == 0;
  }
}
class Brackets extends Stack{
  constructor (){
    super();
  }
  
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
      // console.log(s);
      if (this.openBracket(string[i])){
        this.brackets.push(string[i]);
        console.log(this.brackets);
      } else 
      if (this.closeBracket(string[i])){
        if (this.currectBracket(s, string[i])){
          this.brackets.pop();
          console.log(this.brackets);
        } else
        throw new Error("Invalid brackets");
      } 
    }
   let status = this.brackets.isEmpty;
   console.log("status:" + status);
    if (this.brackets.isEmpty) {
      // return false;
      throw new Error("Invalid brackets");
    } else {
      return true;
    }
    // return this.brackets.length ? throw new Error("Invalid brackets"): true;
  }
}

// const newTask = new Brackets();
// console.log(newTask.isEmpty());

module.exports = {
  lineAnalizer: new Brackets()
};

