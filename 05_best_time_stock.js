const beststocktime = (arr) => {

    let profit = 0;
    let min = 1e8;

    for (let i = 0; i < arr.length; i++) {
        min = Math.min(min, arr[i]);
        profit = Math.max(profit, arr[i] - min);

    }
    return profit;

}

// console.log(beststocktime([7, 1, 5, 3, 6, 4]));
console.log(beststocktime([7, 6, 4, 3, 1]));