function numberOfEmployeesWhoMetTarget(hours: number[], target: number): number {
    const newArr : number[] = hours.filter(i => i >= target);
    return newArr.length;
};