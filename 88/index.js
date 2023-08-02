/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i = m-1;
    let j = n-1;
    let k = m+n-1;
    while(i>=0 && j>=0){
        if(nums1[i]>nums2[j]){
            nums1[k] = nums1[i]
            i--;
        }else{
            nums1[k] = nums2[j]
            j--;
        }
        k--;
    }
    while(j>=0){
        nums1[k] = nums2[j]
        j--;
        k--;
    }

   return nums1
};

// const num1 = [1,2,3,0,0,0];
// const m = 3;
// const num2 = [2,5,6];
// const n = 3;

const num1 = [0];
const m = 0;
const num2 = [1];
const n = 1;
console.log(merge(num1,m,num2,n))