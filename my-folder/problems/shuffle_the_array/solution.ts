function shuffle(nums: number[], n: number): number[] {
    let result : number[] = [];
    let temporary: number = n;

    for (let i = 0; i < n; i++) {
        result.push(nums[i]);
        result.push(nums[temporary]);
        temporary+=1;
    }

    return result;
};