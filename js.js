//1

let family = {
    I: {
        name: "Akbar",
        surname: "Asadov",
        age: 14,
    },
    parents: {
        mother: {
            name: "Mohigul",
            surname: "Kayumova",
            age: 34
        },
        father: {
            name: "Zafar",
            surname: "Asadov",
            fathers_old: 44
        }
    },
    brothers: {
        brother1: {
            name: "Bekzod",
            surname: "Asadov",
            age: 11
        },
        brother2: {
            name: "Samir",
            surname: "Asadov",
            age: 7
        }
    }

}
car = {
    name: "sportage",
    year: 2025,
    color: "grey",
    owener: "Zafar",
    num: "w979ob",
    parrent: {
        serial: "ag3827",
        startDate: 2025,
        endDate: 2030
    },
    old: false
}

//2
let newObj = { ...family }
console.log(newObj);

//3
let keys = Object.keys(car)
console.log(keys);

//4
let val = Object.values(car)
console.log(val);

//5
let all = Object.assign({}, family, car)
console.log(all);

//6
let arr = ["hello", 1234, "", false, NaN, 123, true, " ", null, "29.01.1992"]
string = []
number = []
object = []
boolean = []

val.filter(a => {
    if (typeof a === "string") {
        string.push(a);
    } else if (typeof a === "number") {
        number.push(a);
    } else if (typeof a === "object") {
        object.push(a);
    } else if (typeof a === "boolean") {
        boolean.push(a);
    }
})
console.log(string);
console.log(number);
console.log(object);
console.log(boolean);