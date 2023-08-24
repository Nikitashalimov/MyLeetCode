function topKFrequent(nums: number[], k: number): number[] {
    let hashed = {};

    for (const num of nums) {
        if (hashed.hasOwnProperty(num)) {
            hashed[num] ++;
        } else {
            hashed[num] = 1;
        }
    }

    const entries: [string, number][] = Object.entries(hashed);
    entries.sort((a,b) => b[1] - a[1]);
    const topEntries = entries.slice(0,k);

    const result = topEntries.map(entry => parseInt(entry[0]));

    return result;
};