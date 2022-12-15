function maximumWealth(accounts: number[][]): number {
    let maxNumber = 0;

    accounts.forEach((item) => {
        let sumItem = item.reduce((a,b) => a + b);
        if (sumItem > maxNumber) maxNumber = sumItem;
    })

    return maxNumber;
};