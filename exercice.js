/*
    nums = [2,7,11,15];
    cible = 9
    outpout = [0,1]

    -------------------------------
    nums = [3,2,4];
    cible = 6
    outpout = [1,2]

    -------------------------------

    nums = [3,3];
    cible = 6
    outpout = [0,1]
*/
const nums1 = [2,7,11,15];
const nums2 = [3,2,4];
const nums3 = [3,3];

let twoSum = function (nums, target) {
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
           if(nums[i] + nums[j] === target){
               return [i, j];
           }
        }
    }
    return [];
}

console.log("nums =", nums1);
console.log("cible =", 9);
console.log("output =", twoSum(nums1, 9));
console.log("-----------------------------");

console.log("nums =", nums2);
console.log("cible =", 6);
console.log("output =", twoSum(nums2, 6));
console.log("-----------------------------");

console.log("nums =", nums3);
console.log("cible =", 6);
console.log("output =", twoSum(nums3, 6));