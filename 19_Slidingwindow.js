const sliding = (arr, k) => {
    let result = [];
    let deque = [];
    for (let i = 0; i < arr.length; i++) {
        while (deque.length > 0 && arr[deque[deque.length - 1]] < arr[i]) {
            deque.pop();
        }
        deque.push(i);
        if (deque[0] === i - k) {
            deque.shift();
        }
        if (i >= k - 1) {
            result.push(arr[deque[0]]);
        }
    }

    return result;

}

console.log(sliding([1, 3, -1, -3, 5, 3, 6, 7], 3));