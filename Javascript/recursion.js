// function sum(i) {
//   if (i == 1) {
//     return 1;
//   }
//   return i + sum(i - 1);
// }

// const result = sum(5);
// console.log(result);



// what's happening here

// i + sum(i - 1) => 5 + sum(4);
// 5 + 4 + sum(3)
// 5 + 4 + 3 + sum(2);
//.....




function factorial(i) {
  if (i == 1) {
    return 1;
  } else {
    return i * factorial(i - 1);
  }
}

const result = factorial(5);
console.log(result);
