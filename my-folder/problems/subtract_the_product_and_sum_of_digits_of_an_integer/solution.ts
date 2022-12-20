function subtractProductAndSum(n: number): number {
    let arr = [...''+n].map(Number);
    let sum = 0;
    let com = 1;

    arr.forEach((item) => {
        sum = sum + item;
        com = com * item;
    })

    return com - sum;
};