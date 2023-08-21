const secondlarget = (arr) => {

    // we will use broute way
    // let firstlaregt = -1e8;
    // for (let i = 0; i < arr.length; i++) {

    //     if (arr[i] > firstlaregt) {
    //         firstlaregt = arr[i];
    //     }

    // }

    // arr.pop(firstlaregt);

    // let secondlarget = -1e8;
    // for (let i = 0; i < arr.length; i++) {

    //     if (arr[i] > secondlarget) {
    //         secondlarget = arr[i];
    //     }

    // }

    // return secondlarget;
    // let a = Array.from(new Set(arr));

    // a.sort();
    // return a[a.length - 2];

}


const secondlarget2 = (arr) => {
    let larget = -1e8;
    let secondlarget = -1e8;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > larget) {
            secondlarget = larget;
            larget = arr[i];

        } else if (arr[i] != larget && arr[i] > secondlarget) {
            secondlarget = arr[i];
        }

    }

    return secondlarget;

}

console.log(secondlarget2([1, 2, 3, 4, 5, 6, 7, 8, 9]));










// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const arr2 = [88, 96, 66, 369, 255, 25, 6];
// console.log(secondlarget(arr2));