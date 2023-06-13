function leftRightDifference(nums) {
    if(nums.length < 2) return [0];
    const rev = [...nums].reverse();
    const res = [];
    
    const leftsum = [0, nums[0]];
    const rightsum = [0, nums[nums.length - 1]];

    for(let i = 1; i < nums.length - 1; i++) {
      leftsum.push(leftsum[i] + nums[i])
      rightsum.push(rightsum[i] + rev[i]);
    }
    
    rightsum.reverse();
    
    for(let k = 0; k < nums.length; k++) {
      let cur = leftsum[k] - rightsum[k];
      if(cur < 0) cur *= -1;
      res.push(cur);
    }

    return res;
};