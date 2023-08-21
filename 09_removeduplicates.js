const removeduplicates = (arr) => {




        let a = Array.from(new Set(arr));
        return a;
    }
    // console.log(removeduplicates([1, 2, 2, 3, 3, 3, 3, 4, 3, 4, 5, 6, 7, 8, 9, 1]));

// As we have given the sorted arra we can apply two pinter approch on it



const removeduplicates2 = (arr) => {

        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] === arr[i + 1]) {
                arr.splice(i + 1, 1);

                //splice will remove that element from that postion in the array
                i--;
            }


        }
        return arr;

    }
    // console.log(removeduplicates2([1, 2, 2, 3, 3, 3, 3, 4, 5, 6, 7, 8, 9, 10]));

// harder approch to understand
const removeduplicates3 = (arr) => {

    //  like slow fast pointer
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];

        }

    }
    return i + 1;
};

console.log(removeduplicates3([1, 2, 2, 3, 3, 3, 3, 4, 5, 6, 7, 8, 9]));