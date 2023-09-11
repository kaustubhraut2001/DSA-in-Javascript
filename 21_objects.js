// -----------------------------------------

const obj = {
    name: 'John',
    age: 30
}

obj.name = 'Jack'
console.log(obj.name) // Jack


const func = (function(a) {
    delete a;
    return a;
})(1);

// it will not delete the a is the variable local variabl


// console.log(func) // 1

const obj2 = {
    name: 'John',
    age: 30,
    "kaks": 458
}

// we can also acess the objects like

console.log(obj2["kaks"]);
// we can delete that too by using delete key work
delete obj2["kaks"];
console.log(obj2["kaks"]);

// how can we add dyanamic key value pair in the object
const prop = "firstName";
const prop2 = "lastName";

const obj3 = {
    [prop]: prop2,

}

// console.log(obj3) // lastName

for (key in obj3) {
    // console.log([key])
}


// two keys with a same name so the first keys gets replcaed by the second key
// and it will only output the second key value pair
//eg

const obj4 = {
    a: 1,
    a: 2,
    b: 3
}

// console.log(obj4) /// {a:2,b:3}
function mult(obj) {

    for (let key in obj) {
        if (typeof(obj[key]) === "number") {
            obj[key] *= 2;
        }

    }
    return obj;
}

// console.log(mult(obj4)) // {a:4,b:6}

const a = {}
const b = { key: 'b' }
const c = { key: 'c' }

a[b] = 123
a[c] = 456
    // console.log(a[b]) // 456
    // console.log(a) // { '[object Object]': 456 } it is like this
    // why we get this output because the object key is always a string


// ----------------------------------------- what is json.stringifi and json.parse ------
const obj5 = {
        name: "John",
        age: 30,
    }
    // console.log(JSON.stringify(obj5)) // {"name":"John","age":30}

// console.log(JSON.parse(JSON.stringify(obj5))) // { name: 'John', age: 30 }

// how can we use it in local storage of our browswer
// we can not direculy store the object in the local storage

// localStorage.setItem("obj5", JSON.parse(JSON.stringify(obj5)))


// console.log([...
//     "kaiskiaks"
// ]);

const data = JSON.stringify(obj5, ["age"] x);
console.log(data) // {"name":"John"}