// // YOUR CODE HERE
class ${
  constructor(str){
    let obj;
    let arr = [];
    if(str[0]==="."){
      str=str.substring(1);
      obj = document.getElementsByClassName(str);
      this.elements = [...obj];
    }
    else if(str[0]==="#"){
      str=str.substring(1);
      obj = document.getElementById(str);
      arr.push(obj);
      this.elements = arr;
    }
    else {
      obj = document.getElementsByTagName(str);
      this.elements = [...obj];
    }

  }


}
