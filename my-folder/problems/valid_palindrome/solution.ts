function isPalindrome(s: string): boolean {
    let newStr: string = s.replace(/[^a-zA-Z0-9]/g , '').toLowerCase();

    return newStr.split('').reverse().join('') === newStr ? true : false
};