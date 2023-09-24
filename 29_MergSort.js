function mergsort(arr) {
    if (arr.length < 2) {
        return arr;

    }

    let mid = Math.floor(arr.length / 2);
    let left = mergsort(arr.slice(0, mid));
    let right = mergsort(arr.slice(mid));
    return merg(left, right);
}

function merg(left, right) {
    let result = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());

        } else {
            result.push(right.shift());
        }


    }

    while (left.length) {
        result.push(left.shift());
    }
    while (right.length) {
        result.push(right.shift());
    }

    return result;
}

console.log(mergsort([1, 3, 2, 5, 4, 6, 7, 9, 8, 10]));