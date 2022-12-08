function runningSum(nums: number[]): number[] {
    let result: number[] = [];
    let temporary: number = 0;

    nums.forEach((num) => {
        temporary += num;
        result.push(temporary)
    })

    return result;
};