// const arr = new Array;
// const arr1 = [];
// arr.push(1);
// arr[0]
// arr.unshift(2);
// arr.shift();

// arr.map((e, key) => {

//     e = e + 5
//     console.log(e, key);
// })


// arr.filter((e) => {
//     return e > 0;
// })

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const a = arr.filter((e) => {

//     return e > 2;
// });
// console.log(a);

// const b = arr.reduce((e, acc) => {
//     return acc + e;

// }, 0);

// console.log(b);


// const d = arr.map((e, key) => {

//         console.log(e, key);

//     })
//     // consodle.log(d);
// d;

// const g = arr.every((e) => {
//     console.log(e > 3);
// });
// g;


const arr2 = [8, 9, 10, 11, 12, 13, 14, 15, 16];

// const thired = [arr, arr2]
// it will gives us ouput like this [[1,2,3,4,5,6,7,8,9],[8,9,10,11,12,13,14,15,16]]


// if we needs to add all the elements of an array then we can use reduce method

const third = [...arr, ...arr2];
// console.log(third);

// concate
const fourth = arr.concat(arr2, arr);
// console.log(fourth);

//slice when we wnats to a certan part
const fifth = arr.slice(-1);
// console.log(fifth);\




// splice
const sixth = arr.splice(1, 2, 7);
// console.log(arr);



//fill
const seventh = arr.fill(0);
// console.log(seventh);

// console.log(arr);

const eight = arr.find((e) => {
        return e > 0;
    })
    // console.log(eight);



// flat
const u = [
    [1, 2, 3],
    [47, 89, [7, 5, 6]],
    [1, 2, 3, 4, 5, 6, 89]
]
const nine = u.flat(2);
// console.log(nine);


const ten = u.reverse();
// console.log(ten);




//sort
const sort = arr.sort((a, b) => {
    return b > a;
});

// console.log(sort);