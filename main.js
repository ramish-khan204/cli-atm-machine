#!/usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; //dollar
let myPin = 2468;
let pinAnswer = await inquirer.prompt({
    name: "pin",
    message: "enter your pin",
    type: "number"
});
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code.");
    let operationAnswer = await inquirer.prompt({
        name: "operation",
        message: "please select option",
        type: "list",
        choices: ["withdraw", "check balance", "fastcash"]
    });
    if (operationAnswer.operation === "withdraw") {
        let amountAns = await inquirer.prompt({
            name: "amount",
            message: "enter your amount",
            type: "number"
        });
        if (amountAns.amount <= 5000 && amountAns.amount >= 500) {
            myBalance -= amountAns.amount;
            console.log(`your remaining balance is:" ${myBalance}`);
        }
        else {
            console.log("invalid amount");
        }
    }
    else if (operationAnswer.operation === "fastcash") {
        let fastCashAns = await inquirer.prompt({
            name: "fastcash",
            message: "Choose a fast cash amount",
            type: "list",
            choices: ["$50", "$100", "$1000", "$2000", "$4000", "$5000"]
        });
        // Additional code for fast cash operation
    }
    else if (operationAnswer.operation === "check balance") {
        console.log(`your balance is :${myBalance}`);
    }
}
else {
    console.log("Incorrect pin code!!!");
}
;
