// O(n^2) ---> space complexity
const createSqNum = (n) => {
  let sqArr = [];
  for (let i = 0; i < n; i++) {
    sqArr[i] = [];
    for (let j = 0; j < n; j++) {
      sqArr[i][j] = i + j;
    }
  }
  return sqArr;
};

console.log(createSqNum(5));
/*[
  [ 0, 1, 2, 3, 4 ],
  [ 1, 2, 3, 4, 5 ],
  [ 2, 3, 4, 5, 6 ],
  [ 3, 4, 5, 6, 7 ],
  [ 4, 5, 6, 7, 8 ]
] */
