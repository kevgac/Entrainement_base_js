const nums1 = [2, 7, 11, 15];
const nums2 = [3, 2, 4];
const nums3 = [3, 3];

let twoSum = function (nums, target) {
  let indices = [];

  for (let i = 0; i < nums.length; i++) {
    let idx = nums.indexOf(target - nums[i], i + 1);

    if (idx !== -1) {
      indices.push(i, idx);
      break;
    }
  }

  return indices;
};

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