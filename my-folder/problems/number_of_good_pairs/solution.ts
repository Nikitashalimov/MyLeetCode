function numIdenticalPairs(nums: number[]): number {
    let result = 0;

    for (let i = 0; i < nums.length; i++) {
        let temporaryArr = [...nums.slice(i+1)];

        temporaryArr.forEach((item) => {
            if (item === nums[i]) result +=1;
        })
    }

    return result;
};