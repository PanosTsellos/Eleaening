/**
 * Landing page: Alphabet Page with buttons for the correct pronounciation
 * 
 * @author Panagiotis Tsellos w20024460
 */


//images[0]
import Footer from "./footer";
import React, { useState, useEffect, useRef } from 'react';
import LoadingScreen from "./loadingscreen";

function Main() {
  
  const [isLoading, setLoading] = useState(true);

  const title = "Learn GREEK!";

  // Create an array of Greek letters
  const greekAlphabet = [
    "Αα", "Ββ", "Γγ", "Δδ", "Εε", "Ζζ", "Ηη", "Θθ", "Ιι", "Κκ", "Λλ", "Μμ", "Νν", "Ξξ", "Οο", "Ππ", "Ρρ", "Σσς", "Ττ", "Υυ", "Φφ", "Χχ", "Ψψ", "Ωω"
  ];

  const alphabetRows = [];

  // Loop through each letter in the alphabet array and create a row with a button for each letter
  for (let i = 0; i < greekAlphabet.length; i++) {
    // Split the current letter into separate upper and lower case letters
    const [upper, lower] = greekAlphabet[i].split("");

    // Add a row to the alphabet rows array
    alphabetRows.push(
      <tr key={i}>
        <td>
          <button onClick={() => speak(upper)}> {upper} </button>
        </td>
        <td>
          <button onClick={() => speak(lower)}> {lower} </button>
        </td>
        <td>
          <button onClick={() => speak(greekAlphabet[i])}> Pronounce </button>
        </td>
      </tr>
    );
  }

  // Speak the given text using the Greek language
  function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "el-GR";
    window.speechSynthesis.speak(utterance);
  }

  useEffect(() => {
    setLoading(false); // Simulate data loading delay
  }, []);
  
  if (isLoading) {
    return (
      <div className="loading-screen">
        <LoadingScreen />
      </div>
    );
  }
  return (
    <div>
       {isLoading ? <LoadingScreen /> : null} {/* render the LoadingScreen component if isLoading is true */}
      <h1>{title}</h1>
      <table>
        <thead>
          <tr>
            <th>Upper Case</th>
            <th>Lower Case</th>
            <th>Pronunciation</th>
          </tr>
        </thead>
        <tbody>
          {alphabetRows}
        </tbody>
      </table>
      <Footer />
    </div>
  );
}

export default Main;
