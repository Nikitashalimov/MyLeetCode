function numJewelsInStones(jewels: string, stones: string): number {
    let result: number = 0;

    let i = 0;
    while (i < stones.length) {
        let res = jewels.indexOf(stones[i]);

        if (res != -1) result += 1;

        i += 1;
    }

    return result;
};