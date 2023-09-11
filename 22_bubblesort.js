const bubblessort = (arr) => {

    let n = arr.length;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[i]) {
                let temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;

            }

        }
    }
    return arr;
}

console.log(bubblessort([8, 0, 6, 5, 3, 2, 5, 677, 234, 0]));