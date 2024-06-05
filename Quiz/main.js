import inquirer from "inquirer";
const quiz = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: "Q1: Which is the largest organ of the body?",
        choices: ["Liver", " Skin", "Heart", "Brain"]
    },
    {
        name: "question_2",
        type: "list",
        message: "Q2: How many bones are there in human body?",
        choices: ["202", " 204", "206", "208"]
    },
    {
        name: "question_3",
        type: "list",
        message: "Q3:Which organ controls all the activities in the body?",
        choices: ["Liver", " Skin", "Heart", "Brain"]
    },
    {
        name: "question_4",
        type: "list",
        message: "Q4:In which organ the smallest bones are located?",
        choices: ["Eyes", "Nose", "Ears", "Tongue"]
    },
    {
        name: "question_5",
        type: "list",
        message: "Q5: Which is the strongest muscle in the human body?",
        choices: ["Eyes", "Nose", "Ears", "Tongue"]
    }
]);
let score = 0;
switch (quiz.question_1) {
    case "Skin":
        console.log("1. Correct");
        ++score;
        break;
    default:
        console.log("1. Incorrect");
}
switch (quiz.question_2) {
    case "206":
        console.log("2. Correct");
        ++score;
        break;
    default:
        console.log("2. Incorrect");
}
switch (quiz.question_3) {
    case "Brain":
        console.log("3. Correct");
        ++score;
        break;
    default:
        console.log("3. Incorrect");
}
switch (quiz.question_4) {
    case "Ears":
        console.log("4. Correct");
        ++score;
        break;
    default:
        console.log("4. Incorrect");
}
switch (quiz.question_5) {
    case "Tongue":
        console.log("5. Correct");
        ++score;
        break;
    default:
        console.log("5. Incorrect");
}
console.log(`Score: ${score}`);
