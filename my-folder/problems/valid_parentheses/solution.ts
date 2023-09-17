function isValid(s: string): boolean {
    const stack: string[] = [];
    const bracketsPairs: object = {
        '(':')', 
        '[':']', 
        '{':'}',
    }

    for (const char of s) {
        if (bracketsPairs[char]) {
            stack.push(char);
        } else {
            if (stack.length === 0 || bracketsPairs[stack.pop()] !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
};