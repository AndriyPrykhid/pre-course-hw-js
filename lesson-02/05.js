let passport = {
    name: "Petr",
    surname: "Petrov",
};


let passportCopy = { ...passport, ...passport.name = "Ivan" };
// passportCopy.name = "Ivan"
console.log(passport.name);
console.log(passportCopy.name);

