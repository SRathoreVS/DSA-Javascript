//01 ---
/* 1. basically in this we are having 3 TASKS/OPERATIONS (*, + , /)
   2. if we pass any sort of value 1 <--> infinite , it will have same no of operations
   3. and will take same time - time independent
________________________________________________________  
   4##.- If the Algorithm has the -CONSTANT- num of operation on different values passed then it's TIME-COmplexity is ---> O(1)*/
const someOperations = (n) => {
  return (n * (n + 5)) / 2;
};

console.log(someOperations(2)); //7

//02 ---
/* 1. in this case the time is dependent on the passed value 
   2. Here if n = 2 (7 OPERATIONS) || if n = 3 (9 OPERATIONS) 
   3. So to calculate Time complexity = 2 times the n value is used in for loop and we have 3 operations as console.log

   4. 2*n + 3ops ==== 2n + 3  
________________________________________________________  
   5##.- when the TIME-Complexity is changing with respect to -n- it will have the complexity of ---> O(n) -- changing in constant variation*/

const goingUpDown = (n) => {
  console.log("Going Forward");
  for (let i = 0; i < n; i++) {
    console.log(i);
  }

  console.log("At the end , Going Back!");
  for (let j = n - 1; j >= 0; j--) {
    console.log(j);
  }
  console.log("At the start!");
};

console.log(goingUpDown(2));

// O(1) is always less time taken time-complexity compare to O(n)
