function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    let result: boolean[] = [];
    let newArr = candies.map(x => x + extraCandies);

    newArr.forEach((item) => {
        result.push(candies.every(el => el <= item));
    })

    return result;
};