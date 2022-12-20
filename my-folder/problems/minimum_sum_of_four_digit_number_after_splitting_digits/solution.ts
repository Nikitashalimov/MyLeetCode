function minimumSum(num: number): number {
    let arr = [...''+num].sort();

    let num1 = arr[0] + arr[2];
    let num2 = arr[1] + arr[3];

    return Number(num1) + Number(num2);
};