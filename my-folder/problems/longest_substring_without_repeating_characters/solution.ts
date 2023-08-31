function lengthOfLongestSubstring(s: string): number {
    const charSet = new Set();
    let maxLength = 0;
    let left = 0;
    let right = 0;

    while (right < s.length) {
        if (!charSet.has(s.charAt(right))) {
            charSet.add(s.charAt(right));
            maxLength = Math.max(maxLength, charSet.size);
            right++;
        } else {
            charSet.delete(s.charAt(left));
            left++;
        }
    }

    return maxLength;
}