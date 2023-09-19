let passport = {
    name: "Petr",
    surname: "Petrov",
};


let passportCopy = { ...passport, ...passport.name = "Ivan" };
// passportCopy.name = "Ivan"
console.log(passportCopy.name);
console.log(passport.name);

