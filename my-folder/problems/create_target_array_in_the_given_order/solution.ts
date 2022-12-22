function createTargetArray(nums: number[], index: number[]): number[] {
    let resArr = [];

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let place = index[i];

        if (resArr[place] === undefined) {
            resArr[place] = num;
        } else {
            let copyArrStart = resArr.slice(0,place);
            let copyArrEnd = resArr.slice(place);

            copyArrStart.push(num);
            copyArrEnd.forEach(item => copyArrStart.push(item));

            resArr = copyArrStart;
        }
    }

    return resArr;
};