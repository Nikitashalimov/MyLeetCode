function decompressRLElist(nums: number[]): number[] {
  const res = [];

  for (let i = 0; i < nums.length - 1; i += 2) {
    res.push(...new Array(nums[i]).fill(nums[i + 1]));
  }

  return res;
}