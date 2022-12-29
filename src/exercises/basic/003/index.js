/*
Write a JavaScript program to get the current date.

Expected Output:
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
*/

const date = new Date();

let [dayMonth, month, year] = [date.getDate(), date.getMonth(), date.getFullYear()];

if (dayMonth < 10) {
  dayMonth = `0${dayMonth}`;
};
if (month < 10) {
  month = `0${month}`;
};

export const myFunction = () => {
  console.log(`${dayMonth}/${month}/${year}`);
};