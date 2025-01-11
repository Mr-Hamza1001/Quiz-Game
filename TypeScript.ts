import inquirer from "inquirer";

class Calculator {
    add(num1:number, num2:number):number{
        return num1 + num2;
    }
    subtract(num1:number, num2:number):number{
        return num1-num2;
    }
    multiplication(num1:number, num2:number):number{
        return num1*num2;
    }
    division(num1:number, num2:number):number{
        if(num1==0 || num2==0) {
            throw new Error("Division by 0 is not allowed");
            
        }
        return num1/num2;
    }
}
async function main(){
    const calculator = new Calculator();
const calMain =   await inquirer.prompt([{
    type: 'input',
    name: 'num1',
    message: 'Enter first number',
    default: `0`,
    validate: (input) => !isNaN(Number(input)) || "Please enter Valid Numbers"
},
{
    type: 'list',
    name: 'operator',
    message: 'Select an operator',
    choices: ['+', '-', '*', '/'],
},
{
    type: 'input',
    name: 'num2',
    message: 'Enter second number',
    default: `0`,
    validate: (input) => !isNaN(Number(input)) || "Please enter Valid Numbers"
}

])
const ans1 = Number(calMain.num1)
const ans2 = Number(calMain.num2)
const operation = calMain.operator
let result:number = 0
if(operation=="+"){
    result = calculator.add(ans1,ans2)
}
else if(operation=="-"){
    result = calculator.subtract(ans1,ans2)
}
else if (operation=="*"){
    result = calculator.multiplication(ans1,ans2)
}
else if (operation=="/"){
    result = calculator.division(ans1,ans2)
}

console.log(`Answer is = ${result}`);

}
main()




