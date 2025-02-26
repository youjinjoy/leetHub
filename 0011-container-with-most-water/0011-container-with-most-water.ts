function maxArea(height: number[]): number {
    let left = 0;
    let right = height.length - 1;

    let w = right - left;
    let h = Math.min(height[left], height[right]);

    let extent = w * h;

    while (left < right) {
        if (height[left] < height[right]) {
            left++;
        }
        else {
            right--;
        }
        w = right - left;
        h = Math.min(height[left], height[right]);
        extent = Math.max(w * h, extent);
    }

    return extent;
};