function groupAnagrams(strs: string[]): string[][] {
    let hashed = {};

    for (const str of strs) {
        const key = str.split('').sort().join('');


        if (hashed[key]) {
            hashed[key].push(str)
        } else {
            hashed[key] = [str];
        }
    }

    return Object.values(hashed)
};