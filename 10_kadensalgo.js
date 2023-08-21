const kadens = (arr) => {
    // most optimal
    let maxsum = -1e8;
    let current = 0;
    for (let i = 0; i < arr.length; i++) {
        current = current + arr[i];
        maxsum = Math.max(maxsum, current);
        if (current < 0) {
            current = 0;
        }

    }


    return maxsum;

}

// console.log(kadens([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// console.log(kadens([5, 4, -1, 7, 8]));



// brute way is using two for loops


const kadens2 = (arr) => {
    let maxsum = -1e8;
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = i; j < arr.length; j++) {
            sum = sum + arr[j];
            maxsum = Math.max(maxsum, sum);

        }
    }
    return maxsum;

}

console.log(kadens2([-2, 1, -3, 4, -1, 2, 1, -5, 4]));