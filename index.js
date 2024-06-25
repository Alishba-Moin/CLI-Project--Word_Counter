#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.yellowBright(`\n   <<<====================================>>>`));
console.log(chalk.bold.redBright(`<<<=======>>>  ${chalk.redBright.bold('WORD COUNTER')}  <<<=======>>>`));
console.log(chalk.bold.yellowBright(`   <<<====================================>>>\n`));
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: chalk.bold.italic("Enter Your Sentence To Count The Words And Letters:")
    }
]);
const words = answers.Sentence.trim().split(" ");
const Letters = words.join('');
// print the word count of the scentence to the console.
console.log(chalk.bgGreen.blackBright.bold(` TOTAL WORDS : ${words.length}  `));
console.log(chalk.bgBlue.blackBright.bold(` TOTAL LETTERS : ${Letters.length}  `));
