function interpret(command: string): string {
    let res: string = '';
    let i = 0;

    while (i < command.length) {
        if (command[i] === 'G') {
            res += 'G';
            i += 1;
        } else if (command[i] === '(' && command[i+1] === ')') {
            res += 'o';
            i += 2;
        } else {
            res += 'al';
            i += 4;  
        }
    }

    return res;   
};