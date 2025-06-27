# 📗 Module 5. Logic and Control Flow - Lesson 07.04: Loops and Iteration - Mini-Quiz App Simulator Project

This mini-project is a **loop-based quiz simulation** designed to reinforce core JavaScript concepts like:

- `for` loops
- Array iteration
- Conditional logic
- Case-insensitive comparison
- Score tracking

---

## ✅ Project Structure

### 📁 Files:
- `index.html`: Simple page that loads the script
- `script.js`: Contains all logic for the quiz engine
- `README.md`: Documentation and usage guide

---

## 🧩 How It Works

1. The quiz is defined as an **array of objects**, each with a `question` and `answer`.
2. The user answers are simulated using a parallel array.
3. The program compares each user answer to the correct one (case-insensitive).
4. Correct and incorrect answers are counted and reported in the console.

---

## 🔁 Logic Flow

### 🧮 Pseudocode
```javascript
SET quiz as array of { question, answer }
SET userAnswers as array of responses

SET correctCount = 0
SET incorrectCount = 0

FOR each question index:
    IF userAnswer matches quiz answer (toLowerCase)
        PRINT "Correct!"
        INCREMENT correctCount
    ELSE
        PRINT "Incorrect!"
        INCREMENT incorrectCount

PRINT summary: correctCount / incorrectCount
```

---

## 💡 Sample Output

```
Q1: What is 2 + 2?
✅ Your answer is correct!

Q2: What is the capital city of France?
❌ Your answer is incorrect! Correct answer: Paris

...

Correct answers: 15
Incorrect answers: 5
```

---

## 🚀 Stretch Ideas

- Add a `score percentage` summary
- Accept user input dynamically via `<input>` fields
- Include explanations for each answer
- Add `categories` or `levels`

---

## 📚 Learning Objectives

This project helps you strengthen:
- Iteration using `for` loops
- Condition checking with `if...else`
- Array access and comparison
- Data structure design with objects and arrays

---

Happy coding! 🎉
