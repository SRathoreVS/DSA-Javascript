/*How Many TASKS/OPERATIONS are being performed in the algorithm that metric is used to measure how much time will be taken for the execution of set of the code lines  */

//01 ----
/* 1. FOR loop is used to iterate to each elem
   2. condition is applied to perform the TASK/OPERATION
   3. loop is executing 4 operation - i=0,i=1,i=2,i=3
   4. it takes 4 operation to compete the task
   5. O(n)
 */
const funnyNumber = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (i === 3) return array[i];
  }
};

//02 ---
/* 1. directly returning the possible o/p
   2. performing just 1 task to get same result
   3. therefore taking lesser time 
   4. O(1)*/
const funnyNumber2 = (array) => {
  return array[3];
};

const score = [420, 345, 65, 765, 348];

//01---
console.time("funnyNumber");
console.log(funnyNumber(score));
console.timeEnd("funnyNumber"); // 8.508ms

//02---(less amount of time taken)
console.time("funnyNumber2");
console.log(funnyNumber2(score));
console.timeEnd("funnyNumber2"); // 0.569ms
