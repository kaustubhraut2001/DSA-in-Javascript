const truncate = (str, l) => {

    if (str.length <= l) {
        return str;

    }
    return str.slice(0, l) + '...'
}


// console.log(truncate('I wanna to say next thing about this topic', 9)); // 'I wanna to say next...'

const hammngdist = (str1, str2) => {


    if (str1.length !== str2.length) {
        return false;
    }
    let dist = 0;
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) {
            dist++;
        }

    }
    return dist;
}

//secondapproch

const hammngdist2 = (n1, n2) => {
    n1 = n1.toString(2);
    n2 = n2.toString(2);



}

// console.log(hammngdist('aba', 'aab')); // true


const validanagram = (str1, str2) => {
    if (str1.length !== str2.length) {
        return false;
    }
    t = str1.split('').sort().join('');
    s = str2.split('').sort().join('');

    return t === s;


}

// console.log(validanagram('aba', 'aab')); // true

const validanagram2 = (str1, str2) => {
    if (str1.length !== str2.length) {
        return false;
    }
    let obj1 = {};
    let obj2 = {};
    for (let char of str1) {
        obj1[char] = (obj1[char] || 0) + 1;
        obj2[char] = (obj2[char] || 0) + 1;
    }

    for (let key in obj1) {

        if (!(key in obj2)) {
            return false;
        }

        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}
console.log(validanagram2('aba', 'aab')); // true