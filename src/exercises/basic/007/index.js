/*
Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.
*/

const getFirstDayOfYear = () => {
  for (let i = 2014; i <= 2050; i++) {
    const date = new Date(i, 0, 1);
    const day = date.getDay();

    if (day === 0) {
      console.log(`1st January of ${i} is Sunday!`);
    };
  };
};

export const myFunction = () => {
  getFirstDayOfYear();
};