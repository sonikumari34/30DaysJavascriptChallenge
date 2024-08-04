//Day 23 :LeetCode Hard

//task 1:  Median of two sorted arrays.
function median(a, b) {
    // size of two given arrays:
    const n1 = a.length, n2 = b.length;

    const arr3 = [];
    // apply the merge step:
    let i = 0, j = 0;
    while (i < n1 && j < n2) {
        if (a[i] < b[j]) arr3.push(a[i++]);
        else arr3.push(b[j++]);
    }

    // copy the left-out elements:
    while (i < n1) arr3.push(a[i++]);
    while (j < n2) arr3.push(b[j++]);

    // Find the median:
    const n = n1 + n2;
    if (n % 2 === 1) {
        return arr3[Math.floor(n / 2)];
    }

    const median = (arr3[n / 2] + arr3[(n / 2) - 1]) / 2.0;
    return median;
}

const a = [1, 4, 7, 10, 12];
const b = [2, 3, 6, 15];
console.log("The median of two sorted arrays is " + median(a, b).toFixed(1));
 const nums1 = [1,3];
 const nums2 = [2];
console.log("The median of two sorted arrays is " + median(nums1, nums2).toFixed(1));



