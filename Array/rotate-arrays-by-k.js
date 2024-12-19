/*QUES - 2 -----> ROTATE ARRAY BY K
  Given an integer array nums , rotate the array to the right by k steps ,
  where K is non - negative
  */

//I/O nums= [1,2,3,4,5,6,7], k =3 ---->> O/P = [5,6,7,1,2,3,4]
//I/O nums = [-1,-100,3,99], k = 2 --->> O/P = [3,99,-1,-100]

const rotateArrayByK = (array, k) => {
  let size = array.length;

  if (size < k) {
    k = k % size;
  }

  const rotated = array.splice(size - k, size); // [5,6,7] -->> O(n)
  array.unshift(...rotated); // ---> O(n)

  return array;
};

console.log(rotateArrayByK([1, 2, 3, 4, 5, 6, 7], 3));
// [5,6,7,1,2,3,4]
// Time Complexity ----> O(n)

//___________________________________________________________
//OPTIMIZED ALGORITHM

const rotateArrayByKOptimize = (array, k) => {
  let size = array.length;

  if (size < k) {
    k = k % size;
  }

  //[1,2,3,4,5,6,7] --> [7,6,5,4,3,2,1] --> [5,6,7,4,3,2,1] --> [5,6,7,1,2,3,4]
  reverse(array, 0, array.length - 1); //O(n)
  reverse(array, 0, k - 1); //O(k)
  reverse(array, k, array.length - 1); //O(n-k)

  return array;
};

function reverse(numArray, left, right) {
  while (left < right) {
    const temp = numArray[left];
    numArray[left] = numArray[right];
    numArray[right] = temp;

    left++;
    right--;
  }
}

console.log(rotateArrayByKOptimize([1, 2, 3, 4, 5, 6, 7], 3));
// [5,6,7,1,2,3,4]

//time complexity - O(n)
//space complexity - O(1)
