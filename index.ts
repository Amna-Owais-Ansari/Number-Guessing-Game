#! /usr/bin/env node
import inquirer from 'inquirer'
const randomNumber = Math.floor(Math.random() * 6 + 1);
const ans = await inquirer.prompt([
    {
        type: 'number',
        name: 'userInput',
        message: 'Please enter something:',
    }
]);
if(ans.userInput==randomNumber)
{
    console.log("Congratulation")
}
else{
    console.log("wrong number")
}