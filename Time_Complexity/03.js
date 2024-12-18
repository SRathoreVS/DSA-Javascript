//01 ---
/* 1. this one is also dependent on the passed value 
   2. it increases or decreases the operation in exponential form as in squares
   3. n(1st for loop) * n(2nd for loop) ==> n*n ---> n^2 
   4. O(n^2) --> TIME-complexity
   5. this is BAD time*/
const printBoth = (n) => {
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
};

console.log(printBoth(2)); //4 times
console.log(printBoth(3)); //9 times
/* 0 0
0 1
0 2
1 0
1 1
1 2
2 0
2 1
2 2*/
console.log(printBoth(4)); //16 times
