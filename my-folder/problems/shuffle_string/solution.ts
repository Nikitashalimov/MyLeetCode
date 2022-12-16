function restoreString(s: string, indices: number[]): string {
    let res: string = '';

     for (let i = 0; i < indices.length; i++) {
         res += s[indices.indexOf(i)];
     }

     return res;
};