import inquirer from "inquirer";
let randomNumber = Math.floor(Math.random() * 71000);
let balance = 0;
let answer = await inquirer.prompt([{
        name: "name",
        type: "input",
        message: "Enter Student Name",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Enter a non-empty string";
        }
    },
    {
        name: "courses",
        type: "list",
        message: "Select Your Course",
        choices: ["Python", "TypeScript", "C++", "HTML"]
    }]);
let coursefees = {
    "Python": 10000,
    "TypeScript": 5000,
    "C++": 3500,
    "HTML": 2000,
};
console.log(`you have to pay ${coursefees[answer.courses]} fee for your course`);
let paymentType = await inquirer.prompt([{
        name: "select",
        type: "list",
        message: "Select Payment Methid",
        choices: ["Bank Transfer", "EasyPaise", "JazzCash"]
    },
    {
        name: "amount",
        type: "input",
        message: "Transfer Money",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Enter a non-empty string";
        }
    }]);
let tutionfees = coursefees[answer.courses];
let paymentAmount = parseFloat(paymentType.amount);
if (tutionfees === paymentAmount) {
    console.log("Congratulations You successFully Transfer Your fees");
    let ans = await inquirer.prompt({
        name: "select",
        type: "list",
        message: "What would you like to do next?",
        choices: ["View Status", "Exit"]
    });
    if (ans.select === "View Status") {
        console.log("\n************Status***********\n");
        console.log(`Student Name : ${answer.name}`);
        console.log(`Student Id : ${randomNumber}`);
        console.log(`Course : ${answer.courses}`);
        console.log(`Tution Fees Paid : ${paymentAmount}`);
        console.log(`Balance : ${balance += paymentAmount}`);
    }
    else {
        console.log("Exiting Student Managment System...");
    }
}
else {
    console.log("Invalid Amount Due to Course...");
}
