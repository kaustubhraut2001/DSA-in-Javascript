const twosum = (arr, target) => {
        let ans = [];

        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {

                if (arr[i] + arr[j] === target) {
                    ans.push(arr[i]);
                    ans.push(arr[j]);

                }

            }
        }

        return ans;

    }
    // brute way

// console.log(twosum([4, 2, 5, 8, 9], 7));


// second way using twio pointers and sorting
// complectiy is O(logn + n)

const twosum2 = (arr1, target) => {

    let arr = arr1.sort();
    let result = []

    let l = 0;
    let r = arr.length - 1;
    while (l < r) {
        if (arr[l] + arr[r] === target) {
            result.push(arr[l])
            result.push(arr[r])

        } else if (arr[l] + arr[r] > target) {
            r--;
        } else {
            l++;
        }

    }

    return result;

}


// console.log(twosum2([4, 2, 5, 8, 9], 7));

// third way by using objects
const twosum3 = (arr, target) => {
    let obj = {};

    for (let i = 0; i < arr.length; i++) {
        var a = arr[i];
        if (obj[target - a] >= 0) {
            return [obj[target - a], i];

        } else {
            obj[a] = i;
        }
    }



}
console.log(twosum3([4, 2, 5, 8, 9], 7));