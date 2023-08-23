function twoSum(nums: number[], target: number): number[] {
    const twoSumTable = {};

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const complement = target - num;

        if(twoSumTable.hasOwnProperty(complement)) {
            return [twoSumTable[complement], i];
        }

        twoSumTable[num] = i;
    }

    return null;
}