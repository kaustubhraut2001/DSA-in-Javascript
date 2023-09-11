const insertionsort = (arr) => {
    let n = arr.length;



    for (let i = 0; i < n; i++) {

        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {

            arr[j + 1] = arr[j];
            j--;

        }
        arr[j + 1] = key;

    }
    return arr;
}

console.log(insertionsort([8, 0, 6, 5, 3, 2, 5, 677, 234, 0]));

// time complexity: O(n^2)
// space complexity: O(1)