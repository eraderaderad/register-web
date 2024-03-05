console.log("Hello hehe!");
console.error("ERROR LOLS!!!");
console.warn("WARNING!!!");

//var
//string = words
//number = 12345, 564e, 351.2341
//boolean = true, false 
//object = ["appleas", "banana"], {1, 2, 3, 4}, [lol, 3, false]

//typeof
console.log(typeof("sample string"));

//declaration 
let name = "erad",
    lastname = "erad",
age = 20,
isProf = true,
hobbies = ["playing"];
run = function () {
    console.log("im running.");
};
console.log(name, age, isProf, hobbies, run);
console.table(hobbies)
console.log("My name is " + name + " " + lastname);
console.log(typeof run); 
console.log(`My name is ${name} ${lastname}`);