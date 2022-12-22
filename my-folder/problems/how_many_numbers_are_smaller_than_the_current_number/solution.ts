function smallerNumbersThanCurrent(nums: number[]): number[] {
    return nums.map(n => nums.filter(num => n > num).length);
};