function removeSpaces (str){
  return str.split(' ').join('');
}

function repeatString(str){
  return str.repeat(2);
}

function makeUpperCase(str){
  return str.toUpperCase();
}

function makeItalics(str){
  return str.italics();
}

let str = "Hello There! How are you ?"
console.log (makeItalics(makeUpperCase(repeatString(removeSpaces(str)))));

const func = [str, removeSpaces, repeatString, makeUpperCase, makeItalics];
const res = func.reduce(((prev,curr)=>curr(prev)))

console.log(res)

//compose method takes a bunch of functions and returns a single function