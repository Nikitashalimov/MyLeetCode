function getConcatenation(nums: number[]): number[] {
    let numsCopy: number[] = [...nums];
    return [...nums, ...numsCopy];
};