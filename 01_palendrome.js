function palendrome(a) {
    var b = a.toString();
    var c = b.split("").reverse().join("");
    if (b === c) {
        console.log("palendrome");
    } else {
        console.log("not palendrome");
    }
}

// palendrome(12);

const ispalndrome = (a) => {
    return a === Number(a.toString().split("").reverse().join(""));

}
console.log(ispalndrome(1));