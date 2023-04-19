import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Footer from "./footer";

/**
 * This page is a quiz for the basics of the greek language.
 * This is the first part.
 * @author Panagiotis Tsellos w20024460
 */


function BasicsOfGreekLanguage() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "How do you say Hello/Bye?",
      options: [
        { id: 0, text: "Καλημέρα / Kalimera", isCorrect: false },
        { id: 1, text: "Καληνύχτα / Kalinixta", isCorrect: false },
        { id: 2, text: "Καλησπέρα / Kalispera", isCorrect: false },
        { id: 3, text: "Γειά / Geia", isCorrect: true },
      ],
    },
    {
      text: "How do you say Good morning / Good day?",
      options: [
        { id: 0, text: "Καλημέρα / Kalimera", isCorrect: true },
        { id: 1, text: "Καλησπέρα / Kalispera", isCorrect: false },
        { id: 2, text: "Γειά / Geia", isCorrect: false },
        { id: 3, text: "Καληνύχτα / Kalinixta", isCorrect: false },
      ],
    },
    {
      text: "How do you say Good evening?",
      options: [
        { id: 0, text: "Καλησπέρα / Kalispera", isCorrect: true },
        { id: 1, text: "Καλημέρα / Kalimera", isCorrect: false },
        { id: 2, text: "Καληνύχτα / Kalinixta", isCorrect: false },
        { id: 3, text: "Γειά / Geia", isCorrect: false },
      ],
    },
    {
      text: "How do you say Yes?",
      options: [
        { id: 0, text: "Όχι / Oxi", isCorrect: false },
        { id: 1, text: "Ναί / Nai", isCorrect: true },
        { id: 2, text: "Ευχαριστώ / Efxaristo", isCorrect: false },
        { id: 3, text: "Γειά μας / Geia mas", isCorrect: false },
      ],
    },
    {
        text: "How do you say No?",
        options: [
          { id: 0, text: "Ναί / Nai", isCorrect: false },
          { id: 1, text: "Όχι / Oxi", isCorrect: true },
          { id: 2, text: "Καλημέρα / Kalimera", isCorrect: false },
          { id: 3, text: "Ευχαριστώ / Efxaristo", isCorrect: false },
        ],
      },
      {
        text: "How do you say Thank you?",
        options: [
          { id: 0, text: "Ναί / Nai", isCorrect: false },
          { id: 1, text: "Ευχαριστώ / Efxaristo", isCorrect: true },
          { id: 2, text: "Καλημέρα / Kalimera", isCorrect: false },
          { id: 3, text: "Γειά / Geia", isCorrect: false },
        ],
      },
      {
        text: "How do you say Excuse me?",
        options: [
          { id: 0, text: "Με συγχωρείτε /  Me sihorite", isCorrect: true },
          { id: 1, text: "Καλημέρα / Kalimera", isCorrect: false },
          { id: 2, text: "Καληνύχτα / Kalinixta", isCorrect: false },
          { id: 3, text: "Γειά / Geia", isCorrect: false },
        ],
      },
      {
        text: "How do you say Cheers?",
        options: [
          { id: 0, text: "Καλημέρα / Kalimera", isCorrect: false },
          { id: 1, text: "Καλησπέρα / Kalispera", isCorrect: false },
          { id: 2, text: "Γειά μας/ Geia mas", isCorrect: true },
          { id: 3, text: "Καληνύχτα / Kalinixta", isCorrect: false },
        ],
      },
  ];

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="BasicsOfGreekLanguage">
      {/* 1. Header  */}
      <h1>Greek Basics Quiz</h1>

      {/* 2. Current Score  */}
      <h2>Score: {score}</h2>

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Restart quiz</button>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="question-card">
          {/* Current Question  */}
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          {/* List of possible answers  */}
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li class = "quiz"
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
      <Footer></Footer>
    </div>
  );
}

export default BasicsOfGreekLanguage;