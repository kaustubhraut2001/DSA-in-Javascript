//anagram means two strings are same or not


const anagram = (a, b) => {

    // split it to make it array
    return a.split("").sort().join("") === b.split("").sort().join("");

}

// console.log(anagram("acb", "cba"));

// by using numer of times charter occured in string
const anagram2 = (a, b) => {
    if (a.length !== b.length)
        return false;


    let obj1 = {};
    let obj2 = {};

    for (let i = 0; i < a.length; i++) {

        // at an inital state if there is not an key then insert key as zero
        obj1[a[i]] = (obj1[a[i]] || 0) + 1;
        obj2[b[i]] = (obj2[b[i]] || 0) + 1;



    }

    // we needs to iterate through an onject to get the keys
    for (let keys in obj1) {
        if (obj1[keys] !== obj2[keys]) {
            return false;

        }

    }
    return true;
}
console.log(anagram2("accb", "cba"));