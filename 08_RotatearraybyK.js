const rotaeArrayByK = (arr, k) => {
    let n = arr.length;
    if (k > n) {
        k = k % n;

    }
    // for (let i = 0; i < k; i++) {
    //     arr.unshift(arr.pop());
    // }
    // return arr;

    let a = arr.splice(n - k, n);
    // O(n)
    arr.unshift(...a);
    // O(n)

    return arr;







}

// console.log(rotaeArrayByK([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));

const rotaeArrayByK2 = (arr, k) => {
    let n = arr.length;
    if (n > k) {
        k = k % n;

    }

    reve(arr, 0, arr.length - 1);
    reve(arr, 0, k - 1);
    reve(arr, k, arr.length - 1);


    return arr;
}

function reve(arr, l, r) {
    while (l < r) {

        const temp = arr[l];
        arr[l++] = arr[r];
        arr[r--] = temp;
    }

}

console.log(rotaeArrayByK2([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));