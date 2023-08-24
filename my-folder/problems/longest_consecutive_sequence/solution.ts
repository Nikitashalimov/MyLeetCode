function longestConsecutive(nums: number[]): number {
    if (nums.length > 0) {
        const arr = Array.from(new Set(nums))
        arr.sort((a,b) => a - b);

        const counts: number[] = [];
        let count: number = 1;

        for(let i = 0; i < arr.length; i++) {
            if (arr[i] + 1 !== arr[i+1]) {
                counts.push(count);
                count = 1;
            } else {
                count += 1;
            }
        }

        counts.push(count);

        return Math.max(...counts);
    }

    return 0;
};