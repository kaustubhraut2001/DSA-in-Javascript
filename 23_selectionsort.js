const selectionsort = (arr) => {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let minie = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minie]) {
                minie = j;
            }
        }
        if (minie !== i) {
            [arr[i], arr[minie]] = [arr[minie], arr[i]];
        }

    }
    return arr;
}

console.log(selectionsort([8, 0, 6, 5, 3, 2, 5, 677, 234, 0]));

// time complexity: O(n^2)
// space complexity: O(1)