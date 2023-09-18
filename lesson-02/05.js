let passport = {
    name: "Petr",
    surname: "Petrov",
};
let passportCopy = { ...passport };
passportCopy.name = "Ivan"
console.log(passportCopy);
console.log(passport);
