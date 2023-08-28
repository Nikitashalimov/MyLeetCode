function twoSum(numbers: number[], target: number): number[] {
    
    const hashed = {};

    for (let i = 0; i < numbers.length; i++) {
        const num = numbers[i];
        const complement = target - num;

        if (hashed.hasOwnProperty(complement)) {
            return [hashed[complement], i+1];
        }

        hashed[num] = i+1;
    }

    return null;
};