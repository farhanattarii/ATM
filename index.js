#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; //Dollar
let myPin = 1226;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "enter your pin code",
    }
]);
// 12345 === 1226 - false
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code !!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: [
                "withdraw",
                "check balance",
                "cash 1000",
                "cash 2000",
                "cash 4000",
                "cash 6000",
                "cash 10000",
            ]
        }
    ]);
    console.log(operationAns);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Please enter your amount",
            }
        ]);
        console.log(amountAns);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient balance. Please enter a valid amount. ");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`Your remaining balance is ${myBalance}`); // template literals
        }
    }
    else if (operationAns.operation === "cash 1000") {
        myBalance -= 1000;
        console.log(`Your remaining balance is ${myBalance}`);
    }
    else if (operationAns.operation === "cash 2000") {
        myBalance -= 2000;
        console.log(`Your remaining balance is ${myBalance}`);
    }
    else if (operationAns.operation === "cash 4000") {
        myBalance -= 4000;
        console.log(`Your remaining balance is ${myBalance}`);
    }
    else if (operationAns.operation === "cash 6000") {
        myBalance -= 6000;
        console.log(`Your remaining balance is ${myBalance}`);
    }
    else if (operationAns.operation === "cash 10000") {
        myBalance -= 10000;
        console.log(`Your remaining balance is ${myBalance}`);
    }
    else if (operationAns.operation === "check balance") {
        console.log(`Your balance is: ${myBalance}`);
    }
}
else {
    console.log("Incorrect pin number ! Please re-enter pin number");
}
