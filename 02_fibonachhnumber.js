// 0 1 1 2 3 5 8 13 21 34 55 89 144

const fibonachi = (x) => {
        let a = 0;
        let b = 1;
        let c = 0;

        // we can also use array but it will take more space
        for (let i = 2; i <= x; i++) {

            a = b;
            b = c;
            c = a + b;

        }

        console.log(c);
    }
    // fibonachi(5);

const fibonachi2 = (n) => {
    if (n <= 1) {
        return n;
    }

    return fibonachi2(n - 1) + fibonachi2(n - 2);


}

console.log(fibonachi2(5));