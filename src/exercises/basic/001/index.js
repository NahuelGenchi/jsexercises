/*
Write a JavaScript program to display the current day and time.
Sample Output: Today is Tuesday.
Current time is 23:30:38
*/

const date = new Date();
let [day, hours, minutes, seconds] = [date.getDay(), date.getHours(), date.getMinutes(), date.getSeconds()];
switch (day) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
  default:
    day = "Unexpected day!";
    break;
};

export const myFunction = () => {
  console.log(`Today is ${day}.`);
  console.log(`Current time is ${hours}:${minutes}:${seconds}`);
};