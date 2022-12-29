/*
Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.
*/

const findArea = (a, b, c) => {
  const findSemiParameter = (a2, b2, c2) => {
    return (a + b + c) / 2;
  };
  const s = findSemiParameter(a, b, c);
  const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  return area;
};

export const myFunction = () => {
  console.log(findArea(5, 6, 7));
};