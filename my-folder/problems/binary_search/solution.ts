function search(nums: number[], target: number): number {
    let minIndex = 0;
    let maxIndex = nums.length - 1;

    while (minIndex <= maxIndex) {
        let middleIndex = Math.floor((minIndex + maxIndex)/2);

        if (nums[middleIndex] === target) {
            return middleIndex;
        } else if (target > nums[middleIndex]) {
            minIndex = middleIndex + 1;
        } else {
            maxIndex = middleIndex - 1;
        }
    }

    return -1;
};