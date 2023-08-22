const validparenthesis = (str) => {

    let stack = [];


    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(' || str[i] === '{' || str[i] === '[') {
            stack.push(str[i]);

        } else {
            if (stack.length === 0) {
                return false;
            }
            const a = stack.pop();
            if ((str[i] === ')' && a !== '(') || (str[i] === '}' && a !== '{') || (str[i] === ']' && a !== '[')) {
                return false;
            }

        }


    }
    return stack.length === 0 ? true : false;
}




console.log(validparenthesis("()[]{"));