/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
	if (nums.length == 0) {
		return [];
	}
	const sumArr = [];
	let currentSum = nums[0];
	sumArr.push(currentSum);

	for (let i = 1; i < nums.length; i++) {
		currentSum += nums[i];
		sumArr.push(currentSum);
	}

	return sumArr;
};