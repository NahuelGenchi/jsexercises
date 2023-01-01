/*
Write a JavaScript program to determine whether
a given year is a leap year in the Gregorian calendar.
*/

const determineLeapYear = (year) => {
  let isLeapYear;

  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        isLeapYear = true;
      } else {
        isLeapYear = false;
      };
    } else {
      isLeapYear = true;
    };
  } else {
    isLeapYear = false;
  };

  if (isLeapYear) {
    console.log(`${year} is a leap year.`);
  } else {
    console.log(`${year} is not a leap year.`);
  };
};

export const myFunction = () => {
  determineLeapYear(1992);
  determineLeapYear(2000);
  determineLeapYear(1900);
};