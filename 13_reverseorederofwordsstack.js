const reverseorderofwords = (str) => {
        const splites = str.split(" ");
        let stack = [];
        for (let it in splites) {
            stack.push(it);

        }
        let temp = "";
        while (stack.length) {

            const a = stack.pop();
            if (a) {
                temp += " " + a;

            }

        }
        temp.trim();
        console.log(temp);

    }
    // reverseorderofwords("hello world");

const reverseorderofwords2 = (str) => {
    // suggest some appoch
    // 1. split the string into array
    // 2. push the array into stack
    // 3. pop the stack and concat the string
    // 4. return the string
    const splites = str.split(" ");
    let stack = [];
    for (let it in splites) {
        stack.push(it);

    }
    let temp = "";
    while (stack.length) {

        const a = stack.pop();
        if (a) {
            temp += " " + a;

        }

    }

    console.log(temp.trim());
}

reverseorderofwords2("hello world");