function finalValueAfterOperations(operations: string[]): number {
    let result: number = 0;

    operations.forEach((item) => {
        item.replace('X','') === '++' ? result += 1 : result -= 1;
    })

    return result;
};