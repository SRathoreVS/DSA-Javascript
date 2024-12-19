// Array - declaration

let person = {
  name: "satyam",
  age: 26,
};

let arr = ["apple", "banana", "cherry", person];

console.log(arr[0]);
console.log(arr[3]); //{ name: 'satyam', age: 26 }
console.log(arr[3].name); //satyam
console.log(arr.length); // 4

// To add and remove the elements
//_______________________________________________

//add at end
arr.push("Orange");
console.log(arr);
//[ 'apple', 'banana', 'cherry', { name: 'satyam', age: 26 }, 'Orange' ]

//remove at end
arr.pop();
console.log(arr);
//[ 'apple', 'banana', 'cherry', { name: 'satyam', age: 26 } ]

//add at start
arr.unshift("mango");
console.log(arr);
//[ 'mango', 'apple', 'banana', 'cherry', { name: 'satyam', age: 26 } ]

//remove at start
arr.shift();
console.log(arr);
//[ 'apple', 'banana', 'cherry', { name: 'satyam', age: 26 } ]
//____________________________________________________
// Looping in Array

//01
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
/* apple
banana
cherry
{ name: 'satyam', age: 26 }*/

//02
let i = 0;
while (i < arr.length) {
  console.log(arr[i]);

  i++;
}
/* apple
banana
cherry
{ name: 'satyam', age: 26 }*/

//____________________________________________________________

//Inbuilt LOOP methods

const num = [1, 2, 3, 4, 5, 6, 7];

//01 --map
const newMap = num.map((item, index, arr) => {
  // console.log(item, index, arr);
  return item + 5;
});

//02 -- filter
const newFilter = num.filter((nums) => {
  return nums > 3;
});

//03 -- reduce
const newRed = num.reduce((prev, current) => {
  return prev + current;
}, 0);

console.log(newMap); //[6,7,8,9,10,11,12]
console.log(newFilter); //[4,5,6,7]
console.log(newRed); //28

//04 -- some(return either true or false )
const newSome = num.some((nums) => {
  return nums > 3;
});

//05 --every(every single el and return true / false)
const newEvery = num.every((nums) => {
  return nums > 3;
});

//06 --find (find the 1st true value and returns it)
const newFind = num.find((nums) => {
  return nums > 3;
});

console.log(newSome); // true
console.log(newEvery); //false
console.log(newFind); //4

//07 --- find Indexof()

const logIndex = num.findIndex((ele) => ele === 2);
console.log(logIndex); //1

//________________________________________________________

//SPREAD and REST operators

const number = [1, 2, 3, 4, 5, 6, 7];
const number2 = [8, 9, 10, 11];

//spread ops
const finalNumb = [...number, ...number2];
console.log(finalNumb);
/* [
   1, 2, 3, 4,  5,
   6, 7, 8, 9, 10,
  11
]*/

//rest ops (used in funcs for params)

const sum = (...numms) => {
  return numms;
};
console.log(sum(number, number2, 5, "hello"));
/* [
  [
    1, 2, 3, 4,
    5, 6, 7
  ],
  [ 8, 9, 10, 11 ],
  5,
  'hello'
]*/

//________________________________________________________

//More Array Methods

//01 --- concat

let concatArr = number.concat(number2);
console.log(concatArr); //[1,2,3,4,5,6,7,89,10,11]

let concatArr2 = number.concat(number2, arr);
console.log(concatArr2); //[1,2,3,4,5,6,7,89,10,11,"apple", "banana", "cherry", person]

//02 --- Slice
console.log(arr); //[ 'apple', 'banana', 'cherry', { name: 'satyam', age: 26 } ]
let sliceArr = arr.slice(1, 3);
console.log(sliceArr); //[ 'banana', 'cherry' ]

//03 --- Splice

let spliceArr = arr.splice(1, 2, "orange", "mango");
console.log(spliceArr); // [ 'banana', 'cherry' ]
console.log(arr); //[ 'apple', 'orange', 'mango', { name: 'satyam', age: 26 } ]

//04 --- Fill

let dummyArr = [1, 2, 3, 4];
dummyArr.fill(0);
console.log(dummyArr); //[ 0, 0, 0, 0 ]

let dummyArr2 = [1, 2, 3, 4, 5];
dummyArr2.fill(2, 5);
console.log(dummyArr2);

//________________________________________________________

//05 --- flat()

let arr22 = [1, [2, 3], [4, 5], 6, [[7, 8], 9]];
let flatEx = arr22.flat(2); // i/o for depth of flatening the arr22
console.log(flatEx); //[1,2,3,4,5,6,7,8,9]
//________________________________________________________

//06 --- reverse()

let revArr = [1, 2, 3, 4];
let newRev = revArr.reverse();
console.log(newRev); //[ 4, 3, 2, 1 ]
//________________________________________________________

//07 --- sort()

let unsorted = [1, 4, 7, 3, 8, 10, 0];
let sortArr = unsorted.sort((a, b) => a - b);
console.log(sortArr);
/* [
  0, 1,  3, 4,
  7, 8, 10
]*/
