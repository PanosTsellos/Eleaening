import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";


/**
 * This page is a quiz for the basics of the greek language.
 *  This is the second part
 * @author Panagiotis Tsellos w20024460
 */


function BasicsOfGreekLanguage2() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "How do you say How do you do?",
      options: [
        { id: 0, text: "Καλημέρα / Kalimera", isCorrect: false },
        { id: 1, text: "Καληνύχτα / Kalinixta", isCorrect: false },
        { id: 2, text: "Γειά / Geia", isCorrect: false },
        { id: 3, text: "Τι κάνεις / Ti kaneis", isCorrect: true },
      ],
    },
    {
      text: "How do you say Fine / Well?",
      options: [
        { id: 0, text: "Καλα / Kala", isCorrect: true },
        { id: 1, text: "Τι κάνεις / Ti kaneis", isCorrect: false },
        { id: 2, text: "Γειά / Geia", isCorrect: false },
        { id: 3, text: "Καληνύχτα / Kalinixta", isCorrect: false },
      ],
    },
    {
      text: "How do you say I am fine / well thank you?",
      options: [
        { id: 0, text: "Είμαι καλά, ευχαριστώ /  Eimai kala efharisto", isCorrect: true },
        { id: 1, text: "Καλημέρα / Kalimera", isCorrect: false },
        { id: 2, text: "Τι κάνεις / Ti kanei", isCorrect: false },
        { id: 3, text: "Καλα / Kala", isCorrect: false },
      ],
    },
    {
      text: "How do you say very well and you?",
      options: [
        { id: 0, text: "Καλα / Kala", isCorrect: false },
        { id: 1, text: "Πολύ καλά, εσείς; / Poli kala esis?", isCorrect: true },
        { id: 2, text: "Ευχαριστώ / Efxaristo", isCorrect: false },
        { id: 3, text: "Γειά μας / Geia mas", isCorrect: false },
      ],
    },
    {
        text: "How do you say where are you from?",
        options: [
          { id: 0, text: "Ναί / Nai", isCorrect: false },
          { id: 1, text: "Από πού είστε; / Apo pou iste?", isCorrect: true },
          { id: 2, text: "Πολύ καλά, εσείς; / Poli kala esis?", isCorrect: false },
          { id: 3, text: "Ευχαριστώ / Efxaristo", isCorrect: false },
        ],
      },
      {
        text: "How do you say I am from (+ the name of the country)?",
        options: [
          { id: 0, text: "Από πού είστε / Apo pou iste (+ the name of the country)", isCorrect: false },
          { id: 1, text: "Είμαι από / Eimai apo (+ the name of the country)", isCorrect: true },
          { id: 2, text: "Καλημέρα / Kalimera (+ the name of the country)", isCorrect: false },
          { id: 3, text: "Γειά / Geia (+ the name of the country)", isCorrect: false },
        ],
      },
      {
        text: "How do you say what time are you coming back?",
        options: [
          { id: 0, text: "Τι ώρα θα γυρίσετε; / Ti ora tha girisete?", isCorrect: true },
          { id: 1, text: "Καλημέρα / Kalimera", isCorrect: false },
          { id: 2, text: "Πολύ καλά, εσείς; / Poli kala esis?", isCorrect: false },
          { id: 3, text: "Από πού είστε; / Apo pou iste?", isCorrect: false },
        ],
      },
      {
        text: "How do you say I will be back at (+ time) ?",
        options: [
          { id: 0, text: "Τι ώρα θα γυρίσετε; / Ti ora tha girisete (+ time)", isCorrect: false },
          { id: 1, text: "Καλησπέρα / Kalispera (+ time)", isCorrect: false },
          { id: 2, text: "Θα γυρίσω στις / Tha giriso stis (+ time)", isCorrect: true },
          { id: 3, text: "Καληνύχτα / Kalinixta (+ time)", isCorrect: false },
        ],
      },

//=========================================================================//
//============ THIS IS A QUIZ TO CHECK TEST KNOWLENGE SO FAR =============// 
//=========================================================================//
      {
        text: "How do you say I will be back tomorrow ?",
        options: [
          { id: 0, text: "Τι ώρα θα γυρίσετε; / Ti ora tha girisete", isCorrect: false },
          { id: 1, text: "Καλησπέρα / Kalispera ", isCorrect: false },
          { id: 2, text: "Θα γυρίσω αύριο / Tha giriso abrio", isCorrect: true },
          { id: 3, text: "Καληνύχτα / Kalinixta ", isCorrect: false },
        ],
      },
      {
        text: "What is the Greek word for bread? (Ποια είναι η ελληνική λέξη για ψωμί;)",
        options: [
          { id: 0, text: "Κρέας / Kreas (a)", isCorrect: false },
          { id: 1, text: "Ρύζι / Rizi (b)", isCorrect: false },
          { id: 2, text: "Σοκολάτα / Sokolata (c)", isCorrect: false },
          { id: 3, text: "Ψωμί / Psomi (d)", isCorrect: true }
        ]
      },
      {
        text: "What is the Greek word for sun? (Ποια είναι η ελληνική λέξη για ήλιο;)",
        options: [
          { id: 0, text: "Σελήνη / Selini (a)", isCorrect: false },
          { id: 1, text: "Άστρο / Astro (b)", isCorrect: false },
          { id: 2, text: "Αστέρι / Asteri (c)", isCorrect: false },
          { id: 3, text: "Ήλιος / Ilios (d)", isCorrect: true }
        ]
      },
      {
        text: "What is the Greek word for one? (Ποια είναι η ελληνική λέξη για ένα;)",
        options: [
          { id: 0, text: "Δύο / Dio (a)", isCorrect: false },
          { id: 1, text: "Τρία / Tria (b)", isCorrect: false },
          { id: 2, text: "Μηδέν / Midien (c)", isCorrect: false },
          { id: 3, text: "Ένα / Ena (d)", isCorrect: true }
        ]
      },
      {
        text: "How do you say are you alright?",
        options: [
          { id: 0, text: "Τι ώρα θα γυρίσετε; / Ti ora tha girisete", isCorrect: false },
          { id: 1, text: "Καλησπέρα / Kalispera", isCorrect: false },
          { id: 2, text: "Είστε καλά; / Iste kala?", isCorrect: true },
          { id: 3, text: "Θα γυρίσω αύριο / Tha giriso abrio", isCorrect: false },
        ],
      },
      {
        text: "How do you say okay?",
        options: [
          { id: 0, text: "Εντάξει / Endaksi", isCorrect: true },
          { id: 1, text: "Καλησπέρα / Kalispera", isCorrect: false },
          { id: 2, text: "Είστε καλά / Iste kala", isCorrect: false },
          { id: 3, text: "Ναί / Nai", isCorrect: false },
        ],
      },
      {
        text: "How do you say can you repeat?",
        options: [
          { id: 0, text: "Τι ώρα θα γυρίσετε; / Ti ora tha girisete", isCorrect: false },
          { id: 1, text: "Καλησπέρα / Kalispera", isCorrect: false },
          { id: 2, text: "Είστε καλά; / Iste kala?", isCorrect: false },
          { id: 3, text: "Μπορείτε να επαναλάβετε; / Borite na epanalabete?", isCorrect: true },
        ],
      },
      {
        text: "How do you say what will you have?",
        options: [
          { id: 0, text: "Τι ώρα θα πάρετε; / Ti ora tha parete", isCorrect: true },
          { id: 1, text: "Καλησπέρα; / Kalispera?", isCorrect: false },
          { id: 2, text: "Θα γυρίσω στις; / Tha giriso stis?", isCorrect: false },
          { id: 3, text: "Μπορείτε να επαναλάβετε; / Borite na epanalabete?", isCorrect: false },
        ],
      },
      {
        text: "How do you say water?",
        options: [
          { id: 0, text: "Φωτιά / Fotia", isCorrect: false },
          { id: 1, text: "Γειά / Geia", isCorrect: false },
          { id: 2, text: "Νερό / Nero", isCorrect: true },
          { id: 3, text: "Καφέ / Kafe", isCorrect: false },
        ],
      },
      {
        text: "How do you say coffee?",
        options: [
          { id: 0, text: "Φωτιά / Fotia", isCorrect: false },
          { id: 1, text: "Γειά / Geia", isCorrect: false },
          { id: 2, text: "Νερό / Nero", isCorrect: false },
          { id: 3, text: "Καφέ / Kafe", isCorrect: true },
        ],
      },
      {
        text: "How do you say do you speak (+ a language e.g. English)?",
        options: [
          { id: 0, text: "Μιλάτε / Milate (+ a language e.g. English)", isCorrect: true },
          { id: 1, text: "Τι συμβαίνει / Ti simbenei (+ a language e.g. English)", isCorrect: false },
          { id: 2, text: "Θα γυρίσω στις / Tha giriso stis(+ a language e.g. English)", isCorrect: false },
          { id: 3, text: "Καληνύχτα / Kalinixta (+ a language e.g. English)", isCorrect: false },
        ],
      },
      {
        text: "How do you say when will you be leaving?",
        options: [
          { id: 0, text: "Τι ώρα θα γυρίσετε; / Ti ora tha girisete", isCorrect: false },
          { id: 1, text: "Καλησπέρα / Kalispera ", isCorrect: false },
          { id: 2, text: "Πότε θα φύγετε; / Pote tha figete?", isCorrect: true },
          { id: 3, text: "Θα γυρίσω στις / Tha giriso stis", isCorrect: false },
        ],
      },
      {
        text: "How do you say let's go swimming?",
        options: [
          { id: 0, text: "Πάμε για φαγητό / Pame gia fagito", isCorrect: false },
          { id: 1, text: "Πάμε για ψώνια / Pame gia psonia", isCorrect: false },
          { id: 2, text: "Πάμε βόλτα / Tha giriso bolta", isCorrect: false },
          { id: 3, text: "Πάμε για μπάνιο / Pame gia banio", isCorrect: true },
        ],
      },
      {
        text: "How do you say let's go eat?",
        options: [
          { id: 0, text: "Πάμε για φαγητό / Pame gia fagito", isCorrect: true },
          { id: 1, text: "Πάμε για ψώνια / Pame gia psonia", isCorrect: false },
          { id: 2, text: "Πάμε βόλτα / Tha giriso bolta", isCorrect: false },
          { id: 3, text: "Πάμε για μπάνιο / Pame gia banio", isCorrect: false },
        ],
      },
      {
        text: "How do you say let's go shopping?",
        options: [
          { id: 0, text: "Πάμε για φαγητό / Pame gia fagito", isCorrect: false },
          { id: 1, text: "Πάμε για ψώνια / Pame gia psonia", isCorrect: true },
          { id: 2, text: "Πάμε βόλτα / Tha giriso bolta", isCorrect: false },
          { id: 3, text: "Πάμε για μπάνιο / Pame gia banio", isCorrect: false },
        ],
      },
      {
        text: "How do you say I am sorry / excuse me?",
        options: [
          { id: 0, text: "Τι ώρα θα γυρίσετε; / Ti ora tha girisete", isCorrect: false },
          { id: 1, text: "Καλησπέρα / Kalispera", isCorrect: false },
          { id: 2, text: "Συγνώμη / Signomi", isCorrect: true },
          { id: 3, text: "Καληνύχτα / Kalinixta", isCorrect: false },
        ],
      },
      {
        text: "How do you say it is near?",
        options: [
          { id: 0, text: "Είναι κοντά / Einai konda", isCorrect: true },
          { id: 1, text: "Καλησπέρα / Kalispera", isCorrect: false },
          { id: 2, text: "Είναι μακριά /  Einai makria", isCorrect: false },
          { id: 3, text: "Καληνύχτα / Kalinixta (+ time)", isCorrect: false },
        ],
      },
      {
        text: "How do you say it is far?",
        options: [
          { id: 0, text: "Είναι κοντά / Einai konda", isCorrect: false },
          { id: 1, text: "Καλησπέρα / Kalispera", isCorrect: false },
          { id: 2, text: "Είναι μακριά /  Einai makria", isCorrect: true },
          { id: 3, text: "Καληνύχτα / Kalinixta (+ time)", isCorrect: false },
        ],
      },
      {
        text: "How do you say what would you like / How can I help you?",
        options: [
          { id: 0, text: "Τι θα θέλατε; / Ti tha thelate", isCorrect: true },
          { id: 1, text: "Καλησπέρα / Kalispera", isCorrect: false },
          { id: 2, text: "Θα γυρίσω στις / Tha giriso stis", isCorrect: false },
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
    </div>
  );
}

export default BasicsOfGreekLanguage2;