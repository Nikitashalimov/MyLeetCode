function maxArea(height: number[]): number {
    let max = 0;
    let l = 0;
    let r = height.length - 1;

    while (l < r) {
        const minHeight = Math.min(height[l], height[r]);
        const currentArea = minHeight * (r-l);

        max = Math.max(max, currentArea);
        

        if (height[l] < height[r]) {
            l++;
        } else {
           r--;
        }
}
    return max
};