const bubblessort = (arr) => {

    let n = arr.length;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // let temp = arr[j];
                // arr[j] = arr[j + 1];
                // arr[j + 1] = temp;

                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

            }

        }
    }
    return arr;
}

console.log(bubblessort([8, 0, 6, 5, 3, 2, 5, 677, 234, 0]));

// time complexity: O(n^2)
// space complexity: O(1)