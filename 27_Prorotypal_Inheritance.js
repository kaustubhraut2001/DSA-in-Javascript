let obj1 = {

    conctedname: function() {
        return this.name + " " + this.address;
    }
};


let obj2 = {
    name: "Rahul",

    __proto__: obj1
}

let obj3 = {
        name: "karan",
        address: "Mumbai",

        __proto__: obj2
    }
    //     // this is what prorptypes
    // console.log(obj3.conctedname());

// Object.prototype.conctednamee = function() {
//     return this.name + " " + this.address;
// }

// console.log(obj3.conctednamee());


// const mybind = (...args) => {
//     let a = this;
//     params = args.slice(1);
//     return function(...args2) {
//         a.apply(args[0], [...params, ...args2]);
//     }

// }

// console.log(mybind(obj3.conctednamee));




const mybind = (...args) => {
    // for getting access to the function

    let a = this;
    let params = args.slice(1);

    return function(...args2) {
        a.apply(args[0], [...params, ...args2]);
    }

}


let b = mybind(obj3.conctednamee);
console.log(b());