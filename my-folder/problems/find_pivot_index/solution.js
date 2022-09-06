/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let rightSum = nums.reduce((acc, item) => acc + item);
    let leftSum = 0;
    
    for (let i = 0; i < nums.length; i++) {
		if (leftSum == rightSum - leftSum - nums[i]) {
			return i;
		}
		leftSum += nums[i];
	}

	return -1;
};