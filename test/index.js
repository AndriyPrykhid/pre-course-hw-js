
function isPositive(number) {
    console.log(number > 0)
}
isPositive(5)

function giveMeResult(day) {
    if (day === "Saturday" || day === "Sunday") {
        day = "dayOff"
    } else {
        day = "weekday"
    }

    switch (day) {
        case "dayOff":
            console.log("weekend");
            break;
        case "weekday":
            console.log("weekday");
            break;
        default: console.log("operation is not supported")
    }
}


const isInRange = function (number) {
    console.log(number >= 10 && number <= 20 || number === 0 || number === 100)
}

let prep = {
    name: "Andriy",
    sizes: {
        height: 183,
        weight: 55,
    }
}
function copyPrep(prep) {
    let prep2 = { ...prep, sizes: { ...prep.sizes }, isMarried: true }
    return prep2
}

let prep2 = { ...prep, sizes: { ...prep.sizes } }
prep.name = "Vasya";
prep.sizes.weight = 50;
console.log(prep2)
console.log(copyPrep(prep))

const strin = "andriy-best-programmer"

function cameLize(str) {

    return str.split('-').map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)).join("")
}
console.log(cameLize(strin))
