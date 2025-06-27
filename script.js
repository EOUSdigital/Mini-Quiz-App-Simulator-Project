//TODO 📗 Module 5. Logic and Control Flow - Lesson 07.04: Loops and Iteration - Mini-Quiz App Simulator Project


//TODO 📝 Step 4: Mini-Quiz App Simulator Project

//* 💡 What It Does:
//  A small app that:
//  • Loops through a set of multiple-choice questions
//  • Collects the user’s answers (simulated with an array)
//  • Checks answers and tallies the score
//  • Shows feedback using console output

//* ✅ Concepts Practice:
//  • for loop to iterate through questions
//  • if/else and logical operators to evaluate answers
//  • Arrays and objects to structure questions
//  • Optional: while or do...while to simulate retrying incorrect answers

//* 📋 Project Requirements:
//  1. Create a questions array:

const quiz2 = [
    { question: "What is 2 + 2?", answer: "4" },
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "What is the color of the sky on a clear day?", answer: "blue" }
];

//  2. Simulate user input:

const userAnswers2 = ["4", "paris", "green"];

//  3. Use a for loop to check answers:
//  Loop through both arrays, compare answers, and count how many are correct.

//  4. Print final score:
//  Use console.log() to show total correct answers and detailed feedback.


//* ☑️ Pseudocode:

//  SET quiz as an array of objects with question and answer
//  SET userAnswers as an array of simulated responses

//  SET correctCount to 0
//  SET incorrectCount to 0

//  FOR i from 0 to quiz.length - 1 increment i
//      IF userAnswers[i].toLowerCase() === quiz[i].answer.toLowerCase()
//          PRINT "Correct answer!"
//          INCREMENT correctCount
//      ELSE
//          PRINT "Incorrect answer!"
//          INCREMENT incorrectCount

//  PRINT total correctCount and incorrectCount


//! 🧮 Solution

const quiz = [
    { question: "What is 2 + 2?", answer: "4" },
    { question: "What is the capital city of France?", answer: "Paris" },
    { question: "What is the sky color?", answer: "blue" },
    { question: "How many planets are in the Solar System?", answer: "eight" },
    { question: "Who wrote the play 'Romeo and Juliet'?", answer: "William Shakespeare" },
    
    { question: "What is the largest planet in our solar system?", answer: "Jupiter" },
    { question: "What is the chemical symbol for water?", answer: "H2O" },
    { question: "Who painted the Mona Lisa?", answer: "Leonardo da Vinci" },
    { question: "What is the smallest prime number?", answer: "2" },
    { question: "Which animal is known as the King of the Jungle?", answer: "Lion" },
    
    { question: "In what year did the Titanic sink?", answer: "1912" },
    { question: "What is the currency of Japan?", answer: "Yen" },
    { question: "Which planet is known as the Red Planet?", answer: "Mars" },
    { question: "What is the hardest natural substance on Earth?", answer: "Diamond" },
    { question: "What is the main language spoken in Brazil?", answer: "Portuguese" },
    
    { question: "How many continents are there on Earth?", answer: "Seven" },
    { question: "What is the boiling point of water in Celsius?", answer: "100" },
    { question: "Who discovered gravity when he saw a falling apple?", answer: "Isaac Newton" },
    { question: "What is the largest mammal in the world?", answer: "Blue whale" },
    { question: "What is the longest river in the world?", answer: "Nile" }
];

const userAnswers = [
    "4", "paris", "green", "nine", "William Shakespeare", "Saturn", "H2O",
    "Leonardo da Vinci", "0", "Lion", "1912", "Yen", "Mars", "Diamond", "Portuguese",
    "Seven", "200", "Isaac Newton", "Blue whale", "Nile"
];

let correctCount = 0;
let incorrectCount = 0;

for (let i = 0; i < quiz.length; i++) {
    console.log(`Q${i + 1}: ${quiz[i].question}`);
    if (userAnswers[i].toLowerCase() === quiz[i].answer.toLowerCase()) {
        console.log("✅ Your answer is correct!\n");
        correctCount++;
    } else {
        console.log(`❌ Your answer is incorrect! Correct answer: ${quiz[i].answer}\n`);
        incorrectCount++;
    }
}

console.log(`Correct answers: ${correctCount}`);
console.log(`Incorrect answers: ${incorrectCount}`);

