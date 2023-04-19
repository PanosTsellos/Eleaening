import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Footer from "./footer";

/**
 * This page is a quiz for the basics of the greek language.
 *  This is the second part
 * @author Panagiotis Tsellos w20024460
 */


function GeneralQuiz() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
        text: "What is the capital of Greece? (Ποια είναι η πρωτεύουσα της Ελλάδας;)",
        options: [
            {id: 0, text: "Θεσσαλονίκη / Thessaloniki (a)", isCorrect: false},
            {id: 1, text: "Αθήνα / Athens (b)", isCorrect: true},
            {id: 2, text: "Πάτρα / Patras (c)", isCorrect: false},
            {id: 3, text: "Ηράκλειο / Heraklion (d)", isCorrect: false}
        ]
    },
{
    text: "What is the name of the highest mountain in Greece? (Ποιο είναι το όνομα του ψηλότερου βουνού στην Ελλάδα;)",
    options: [
    {id: 0, text: "Όλυμπος / Olympus (a)", isCorrect: true},
    {id: 1, text: "Πάρνηθα / Parnitha (b)", isCorrect: false},
    {id: 2, text: "Ταϋγέτος / Taygetus (c)", isCorrect: false},
    {id: 3, text: "Πάρνασος / Parnassus (d)", isCorrect: false}
    ]
  },
  {
    text: "What is the name of the longest river in Greece? (Ποιο είναι το όνομα του μακρύτερου ποταμού στην Ελλάδα;)",
    options: [
    {id: 0, text: "Έβρος / Evros (a)", isCorrect: true},
    {id: 1, text: "Αχελώος / Achelous (b)", isCorrect: false},
    {id: 2, text: "Πηνειός / Pineios (c)", isCorrect: false},
    {id: 3, text: "Αλφειός / Alfeios (d)", isCorrect: false}
    ]
  },
  { 
    text: "What is the name of the largest island in Greece? (Ποιο είναι το όνομα του μεγαλύτερου νησιού στην Ελλάδα;)",
    options: [
    {id: 0, text: "Κρήτη / Crete (a)", isCorrect: true},
    {id: 1, text: "Λέσβος / Lesbos (b)", isCorrect: false},
    {id: 2, text: "Ρόδος / Rhodes (c)", isCorrect: false},
    {id: 3, text: "Κέρκυρα / Corfu (d)", isCorrect: false}
    ]
  },
  {
    text: "What is the name of the highest mountain in Greece? (Πως ονομάζεται ο ψηλότερος βουνό της Ελλάδας;)",
    options: [
    { id: 0, text: "Ολύμπου / Olympus (a)", isCorrect: true },
    { id: 1, text: "Πάρνηθα / Parnitha (b)", isCorrect: false },
    { id: 2, text: "Άθω / Athos (c)", isCorrect: false },
    { id: 3, text: "Ταϋγέτη / Taygetus (d)", isCorrect: false }
    ]
    }, 
    {
    text: "What is the name of the famous ancient Greek physician known as the 'father of modern medicine'? (Πως ονομαζόταν ο διάσημος αρχαίος Έλληνας ιατρός γνωστός ως «πατέρας της σύγχρονης ιατρικής»;)",
    options: [
    { id: 0, text: "Σωκράτης / Socrates (a)", isCorrect: false },
    { id: 1, text: "Πλάτων / Plato (b)", isCorrect: false },
    { id: 2, text: "Ιπποκράτης / Hippocrates (c)", isCorrect: true },
    { id: 3, text: "Αριστοτέλης / Aristotle (d)", isCorrect: false }
    ]
    },    
    {
    text: "Which Greek island is famous for its white-washed houses with blue domed roofs? (Ποιο νησί της Ελλάδας είναι διάσημο για τα λευκά σπίτια με τις μπλε στέγες;)",
    options: [
    { id: 0, text: "Κέα / Kea (a)", isCorrect: false },
    { id: 1, text: "Σαντορίνη / Santorini (b)", isCorrect: true },
    { id: 2, text: "Νάξος / Naxos (c)", isCorrect: false },
    { id: 3, text: "Κρήτη / Crete (d)", isCorrect: false }
    ]
    },
    {
      text: "Which ancient Greek philosopher is known for his teachings on ethics and morality, and was the teacher of Alexander the Great? (Ποιος αρχαίος Έλληνας φιλόσοφος είναι γνωστός για τις διδασκαλίες του στην ηθική και την ηλεκτριστική, και ήταν ο δάσκαλος του Αλεξάνδρου του Μεγάλου;)",
    options: [
        { id: 0, text: "Plato / Πλάτων (a)", isCorrect: false },
        { id: 1, text: "Aristotle / Αριστοτέλης (b)", isCorrect: true },
        { id: 2, text: "Socrates / Σωκράτης (c)", isCorrect: false },
        { id: 3, text: "Epicurus / Επίκουρος (d)", isCorrect: false }
    ]
    },
    {
    text: "Which famous Greek mathematician and physicist is considered one of the most influential scientists in history, and is known for his work on gravity and motion? (Ποιος διάσημος Έλληνας μαθηματικός και φυσικός θεωρείται ένας από τους πιο επιδραστικούς επιστήμονες στην ιστορία, και είναι γνωστός για τη δουλειά του στη βαρύτητα και την κίνηση;)",
    options: [
        { id: 0, text: "Pythagoras / Πυθαγόρας (a)", isCorrect: false },
        { id: 1, text: "Archimedes / Αρχιμήδης (b)", isCorrect: true },
        { id: 2, text: "Euclid / Ευκλείδης (c)", isCorrect: false },
        { id: 3, text: "Hippocrates / Ιπποκράτης (d)", isCorrect: false }
    ]
  },
  {
    text: "What is the name of the highest mountain in Greece? (Ποιο είναι το όνομα του ψηλότερου βουνού στην Ελλάδα;)",
    options: [
    { id: 0, text: "Όλυμπος / Olympus (a)", isCorrect: true },
    { id: 1, text: "Πάρνηθα / Parnitha (b)", isCorrect: false },
    { id: 2, text: "Κίτρινος / Kitrinos (c)", isCorrect: false },
    { id: 3, text: "Αίνος / Ainos (d)", isCorrect: false }
    ]
  },
  {
    text: "What is the Greek word for love? (Ποια είναι η ελληνική λέξη για αγάπη;)",
    options: [
    { id: 0, text: "Φιλία / Filia (a)", isCorrect: false },
    { id: 1, text: "Έρωτας / Eros (b)", isCorrect: false },
    { id: 2, text: "Αγάπη / Agapi (c)", isCorrect: true },
    { id: 3, text: "Αίσθημα / Aisthima (d)", isCorrect: false }
    ]
    },
    {
      text: "What is the name of the ancient fortified citadel overlooking Athens? (Ποιο είναι το όνομα της αρχαίας ενισχυμένης ακρόπολης που επιβλέπει την Αθήνα;)",
      options: [
      { id: 0, text: "Παρθενώνας / Parthenonas (a)", isCorrect: false },
      { id: 1, text: "Ακρόπολη / Acropolis (b)", isCorrect: true },
      { id: 2, text: "Στύλοι του Ολυμπίου Διός / Styloi tou Olympiou Dios (c)", isCorrect: false },
      { id: 3, text: "Κεραμεικός / Kerameikos (d)", isCorrect: false }
      ]
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

export default GeneralQuiz;