// QUES -1- Second Largest Number
// given an array of size N, print second largest
// distinct element from an array

//I/O : [12,35,1,10,34,1] ---->>> O/p : 34
// I/O : [10,5,10] ----->>> O/P : 5

// 1. whole will take O(nlogn)
const secondLargest = (array) => {
  const uniqueArr = Array.from(new Set(array)); //O(n)

  uniqueArr.sort((a, b) => {
    //O(nlogn)
    return b - a;
  });

  if (uniqueArr.length >= 2) {
    return uniqueArr[1];
  } else {
    return -1;
  }

  // console.log(uniqueArr); //[ 12, 35, 1, 10, 34 ]
};

const output1 = secondLargest([12, 35, 1, 10, 34, 1]);
console.log(output1); //34

//_____________________________________________________________

// 2nd largest value - OPTIMIZED

/* 1. iteration starts with the array 
   2. checks condition if(arr[i] > largest) --> largest = arr[i] = 12(1st) and secondLargest = largest --> -1
   3. check again for next coming values , 35 > largest(12) , largest ---> 35 and second ---> 12
   4. 1 > 35 -- false , so in ElseIf --> both statement false
   5. 10 > 35 && 10 > 12 ---> if and elseIf both false
   6. 34 > 35 false && elseIf --> 34 > 12 --> true , secondLargest = 34 
   7. 1 > 35 -- false , so in ElseIf --> both statement false again
   
   8. conclusion largest = 35 and secondLargest = 34*/

const secondLargestOptimized = (array) => {
  let largest = Number.NEGATIVE_INFINITY;
  let secondLargest = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < array.length; i++) {
    //O(arr.length) --> O(n)
    if (array[i] > largest) {
      secondLargest = largest;
      largest = array[i];
    } else if (array[i] != largest && array[i] > secondLargest) {
      secondLargest = array[i];
    }
  }
  return secondLargest;
};

const output2 = secondLargestOptimized([12, 35, 1, 10, 34, 1]); //34
const output3 = secondLargestOptimized([10, 5, 10]); // 5

console.log(output2, output3);
/* Time Complexity Optimized --->> O(n)
   Space Complexity ----->>>> O(1) as constant single value */
