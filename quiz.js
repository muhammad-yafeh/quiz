import inquirer from "inquirer";
class quiz {
    constructor(Name, rollNo) {
        this.name = Name;
        this.rollNo = rollNo;
    }
}
async function test() {
    let answers = await inquirer.prompt([
        { type: "input",
            name: "fullname",
            message: "enter name:" },
        { type: "input",
            name: "id",
            message: "enter your id:" },
        { type: "list",
            name: "q1",
            choices: [1947, 1847, 1747],
            message: "Pakistan came into being in the year" },
        { type: "list",
            name: "q2",
            choices: [1977, 1857, 1757],
            message: "Mughal empire ended in" },
        { type: "list",
            name: "q3",
            choices: ["arabic", "turkish", "urdu"],
            message: "National lamguage of Pakistan is" }
    ]);
    let marks = 0;
    if (answers.q1 == "1947") {
        marks += 5;
    }
    if (answers.q2 == "1857") {
        marks += 5;
    }
    if (answers.q3 == "urdu") {
        marks += 5;
    }
    console.log(`your marks are ${marks}/15`);
    let x = new quiz(answers.fullname, answers.id);
}
test();
