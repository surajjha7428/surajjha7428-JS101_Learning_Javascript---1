// Author : Suraj jha

// Question --> Given a character in lower case print the upper case character

let str = "a";

let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 

for(i=0; i < lowerCase.length;  i++)
  {
    if (lowerCase[i] == str)
    {
      str = upperCase[i]
    }
  }

console.log(str)