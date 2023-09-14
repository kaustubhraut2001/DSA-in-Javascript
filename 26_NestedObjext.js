let nestedobj = {
    name: 'Rahim',

    addres: {
        peronaladdress: "Mumbai",
        officeaddress: "Delhi"
    },

    phonenumber: {
        personal: 123456789,
        office: 987654321
    }

}


let obj = {};

const magiconj = (nestedobj, parent) => {

    for (let key in nestedobj) {

        if (typeof nestedobj[key] === 'object') {
            magiconj(nestedobj[key], parent + "_" + key);
        } else {
            obj[parent + "_" + key] = nestedobj[key];
        }

    }

    return obj;

}

console.log(magiconj(nestedobj, "user"));