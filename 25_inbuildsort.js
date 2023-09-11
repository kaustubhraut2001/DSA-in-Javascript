let arr = ["fruit", "plant", "apple"]

console.log(arr.sort())


let arr1 = [10, 7, 8, 9]

let compare = (a, b) => {
    return b - a;
}
console.log(arr1.sort(compare))

let obj = [{

        name: "apple",
        age: 20
    },
    {
        name: "banana",
        age: 10
    },
    {
        name: "mango",
        age: 30
    }
];


let compare1 = (a, b) => {
    return a.age - b.age;
}

console.log(obj.sort(compare1))