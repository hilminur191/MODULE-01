//write a code to find area of rectangle
//length = 5 width = 3
const length = 5;
const width = 3;

const arearec = length * width;
const perimeter = 2 * (length + width);

console.log(arearec);
console.log(perimeter);

//write a code to find diameter, circumference and area of a circle
// radius = 5
const radius = 5;
const pi = Math.PI;

const diameter = 2 * radius;
const circumference = 2 * pi * radius;
const area = pi * radius * radius;

console.log(diameter);
console.log(circumference);
console.log(area);

//write a code to find angles of triangle if two angles are given
// a = 80 b = 65

const angleA = 80;
const angleB = 65;

const angleC = 180 - angleA - angleB;

console.log(angleC);

//write a code to convert days to years, months and days
//400 days
const totalDays = 400;

const years = Math.floor(totalDays / 365);
const remainingDaysAfterYears = totalDays % 365;
const months = Math.floor(remainingDaysAfterYears / 30);
const days = remainingDaysAfterYears % 30;

console.log(
  `${totalDays} days = ${years} year(s), ${months} month(s), ${days} day(s)`
);

//write a code to convert days to years, months and days
//366 days
const totalDays2 = 366;

const years2 = Math.floor(totalDays2 / 365);
const remainingDaysAfterYears2 = totalDays2 % 365;
const months2 = Math.floor(remainingDaysAfterYears2 / 30);
const days2 = remainingDaysAfterYears2 % 30;

console.log(
  `${totalDays2} days = ${years2} year(s), ${months2} month(s), ${days2} day(s)`
);
//write a code to get difference between dates in days.
//date1 = 2022-01-20, date2 = 2022-01-22

const date1 = new Date("2022-01-20");
const date2 = new Date("2022-01-22");

const diffInMilliseconds = date2 - date1;

const diffInDays = diffInMilliseconds / (1000 * 60 * 60 * 24);

console.log(`Difference beetween dates: ${diffInDays} day(s)`);
