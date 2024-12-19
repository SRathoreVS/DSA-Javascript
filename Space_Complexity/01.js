//SPACE COMPLEXITY ----
/* 1. Amount of memory the algorithm needs to run 
   2. Also measured in Big O notation 
   3. as the size of I/O increases the space-complexity Increases
   4. size of I/O and size of the code and any other data Struct used
   
   5. Boolean,null,num,undefined --> Constant Space complexity
   6. STRING,Arrays,Objects ---> Dynamic Space complexity as will change based on I/o values */

//01---
/* 1. This one always returns the single value , do not depend on    the dynamic value
   2. so every time it takes the single space in memory 
   3. O(1) --> space Complexity*/
const funnyNumber = (array) => {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

let score = [420, 252, 583, 454, 88];

console.log(funnyNumber(score));

//02 ---
/* 1. whereas this depends on the I/O value -n- , and each time -n- increases the O/P value increases as well
   2. therefore it takes different space memory each time
   3.  O(n) --> space Complexity*/
const funnyNumber2 = (n) => {
  const array = [];
  for (let i = 0; i < n; i++) {
    array.push(i * 69);
  }
  return array;
};

console.log(funnyNumber2(5));
