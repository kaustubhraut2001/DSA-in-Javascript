const a = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('a');
    }, 1000);
    console.log("insdie tradaetional promise");

});

// const fetch = require("node-fetch")
// import fetch from 'node-fetch';
// a.then(res => console.log(res)).catch((err) => {
//     console.log(err);

// });
function b() {
    console.log("function b");
}
async function f() {
    console.log("inside async function1");
    const c = await b();
    console.log(c);
    console.log("inside await function2");
}

// f().then(res => console.log(res)).catch(err => console.log(err));
// f().then(res => console.log(res)).catch(err => console.log(err));

const g = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('g');
    }, 1000);
    console.log("insdie tradaetional promise");

});
g.then(res => console.log(res)).catch((err) => { console.log(err); })