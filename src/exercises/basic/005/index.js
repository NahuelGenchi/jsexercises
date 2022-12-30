/*
Write a JavaScript program to rotate the string 'w3resource'
in right direction by periodically removing one letter from
the end of the string and attaching it to the front.
*/

const reverseString = (str) => {
  let reversedStr = [];
  for (let i = 0; i < str.length; i++) {
    reversedStr.unshift(str[i]);
  };
  reversedStr = reversedStr.join("");

  console.log(`Your string: ${str}`);
  console.log(`Your string reversed: ${reversedStr}`);
};

export const myFunction = () => {
  reverseString("Nahuel");
};