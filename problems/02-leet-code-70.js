/*********************************************************************
Work through this problem on https://leetcode.com/problems/climbing-stairs/
and use the specs given there. Feel free to use this file for scratch work.
*********************************************************************/

/**
 * @param {number} n
 * @return {number}
 */
 const climbStairs = (n) => {

};


// 1: 1, 1
// 2: 2, 11, 2
// 3: 2, 11 --> 1
// 3: 111, 12, 21, 3
// 4: 1111, 112, 121, 211, 22, 5

// 3       \ 4       \ 5           \ 6             \  7              \  8
// 1 1 1   \ 1 1 1 1 \ 1 1 1 1 1   \ 1 1 1 1 1 1   \  1 1 1 1 1 1 1  \  1 1 1 1 1 1 1 1
// 1 2     \ 1 2 1   \ 1 2 1 1     \ 1 2 1 1 1     \  1 2 1 1 1 1    \  1 2 1 1 1 1 1
// 2 1     \ 2 1 1   \ 2 1 1 1     \ 2 1 1 1 1     \  2 1 1 1 1 1    \  2 1 1 1 1 1
//         \ 2 2     \ 2 2 1       \ 2 2 1 1       \  2 2 1 1 1      \  2 2 1 1 1
//                   \             \ 2 2 2         \  2 2 2 1        \  2 2 2 1










// odd and even



// [1, 1, 1, 1]
// [2, 2]

// 5
// [1, 1, 1, 1, 1]
// [2, 2]

// 6
// [1, 1, 1, 1, 1, 1]
// [2, 2, 2]

// 7
// [1, 1, 1, 1, 1, 1, 1]
// [2, 2, 2]

// 8
// [1, 1, 1, 1, 1, 1, 1, 1]
// [2, 2, 2, 2]

// permutation
// sum and compare

// let n = 5
// let arr1 = []
// let arr2 = []

// for (let i = 0; i < n; i++) {
//   arr1.push(1)
// }

// let arr2Length = Math.floor(n/2)
// for (let i = 0; i < arr2Length; i++) {
//   arr2.push(2)
// }

// let finalArray
// for (let i = 0; i < arr1.length; i++) {
//   for (let j = i + 1; j < arr2.length; j++) {


//   }
// }
