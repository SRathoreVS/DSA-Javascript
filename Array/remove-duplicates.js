// QUES - 3 - Remove Duplicates from Sorted Array
// Given an Integer array nums sorted in non-decreasing order , remove
// the Duplicates in-place such that each unique elem appears
// only once . The relative order of the elems should be kept
// the same. Then return the number of unique elems in nums

//I/O - [1,1,2]      -------->>>>  O/P - 2, [1,2,_]
//I/O - [0,0,1,1,1,2,2,3,3,4] -->> O/P - 5 ,[0,1,2,3,4,_,_,_,_,_]

//01 - Inbuilt Js -->

function removeDuplicates(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[i + 1]) {
      array.splice(i + 1, 1);
      i--;
    }
  }
  return array.length;
}

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // 5
console.log(removeDuplicates([1, 1, 2])); // 2

//Time Complexity -- O(n)
//Time Complexity -- O(1)

//__________________________________________________________

// Without JS methods

function removeDuplicatesOpt(arr) {
  if (arr.length === 0) return 0;
  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

console.log(removeDuplicatesOpt([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); //5

//[0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
// i = 0
// j = 1
//condition (arr[i]=0 !== arr[j]=0) ---> false --- do not return

//i++ = i=1 || j = 2
