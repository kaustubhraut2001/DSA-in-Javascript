const fact = (n) => {

    if (n <= 1) {
        return n;

    }

    return n * fact(n - 1);

}

// console.log(fact(3));


//range of numbers

const range = (start, end) => {
    if (start === end) {
        return;


    }
    console.log(start);
    range(start + 1, end);


}

// range(1, 8);


//palendrome using recurssion


const palendrome = (n) => {
    if (n === 0) {
        return 0;
    }

    return (n % 10) + palendrome(Math.floor(n / 10));

}

// console.log(palendrome(1234));

const palendrome1 = (n) => {
        if (n === 0) {
            return 0;
        }

        return (n % 10) * Math.pow(10, Math.floor(Math.log10(n))) + palendrome1(Math.floor(n / 10));

    }
    // console.log(palendrome1(1234));



const fibo = (n) => {
        if (n <= 1) {
            return n;

        }
        return fibo(n - 1) + fibo(n - 2);



    }
    // console.log(fibo(5));

const reverse = (str) => {
        if (str === "") {
            return "";

        }

        return reverse(str.substr(1)) + str.charAt(0);

        //what it ill does it it will first take the chareter at 1 st index and keet it like h
        // then it call again the function for rest of the string
        // when we hit base case it will return the string and then it will add all the charcter to it
        // like it will fill the recursie stack and return from there



    }
    // console.log(reverse("hello"));




const subsets = (arr, temp, ind) => {
    if (ind === arr.length) {
        console.log(temp);
        return;
    }
    temp.push(arr[ind]);
    subsets(arr, temp, ind + 1);
    temp.pop();
    subsets(arr, temp, ind + 1);

}

// we can use power set also to generate all the subsets
const powerset = (arr) => {
    let n = arr.length;
    let pow = Math.pow(2, n);
    for (let i = 0; i < pow; i++) {
        let temp = [];
        for (let j = 0; j < n; j++) {
            if (i & (1 << j)) {
                temp.push(arr[j]);
            }
        }
        console.log(temp);
    }
};

// console.log(subsets([1, 2, 3], [], 0));
powerset([1, 2, 3]);