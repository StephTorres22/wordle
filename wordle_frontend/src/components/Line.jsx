/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import LetterBox from "./LetterBox";
import axios from "axios";
import { letterObjFactory } from "../utility/factory.js";

function Line({ inputRef, handleInputChange, count }) {
  const styles = {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gridTemplateRows: "1fr",
    height: "fit-content",
    width: "100%",
    // backgroundColor: "blue",
    fontSize: "2.5rem",
    lineHeight: "1.5",
  };

  const [word, setWord] = useState("");
  const [letterObjs, setLetterOjbs] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [hasBeenUsed, setHasBeenUsed] = useState(false);

  useEffect(() => {
    const letters = [];
    for (let i = 0; i < count; i++) {
      letters.push(letterObjFactory(i, word[i]));
    }
    setLetterOjbs(letters);
  }, [word, count]);

  async function submitWord() {
    // console.log(data.word);
    await axios
      .post("http://localhost:8000", letterObjs)
      /*  .then(() => {
        console.log(`${data.word} was sent to server`);
      }) */
      .then((response) => {
        setLetterOjbs(response.data);
      })
      .catch((error) => {
        console.log(console.log(error));
      });
  }

  return (
    <div style={{ width: "60%", height: "fit-content" }}>
      <input
        ref={inputRef}
        type="text"
        maxLength={5}
        value={word}
        onChange={(e) => {
          setWord(e.target.value.trim().toUpperCase());
        }}
        disabled={disabled}
        style={{ opacity: "0" }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            if (word.length < 5) {
              alert(
                "Your word is too short, make sure it is a five letter word."
              );
            } else {
              setDisabled(!disabled);
              setHasBeenUsed(!hasBeenUsed);
              handleInputChange(inputRef);
              submitWord();
            }
          }
        }}
      />

      <div style={styles}>
        {letterObjs.map((letter) => {
          return (
            <LetterBox
              key={letter.index}
              correctLetter={letter.correctLetter}
              correctLetterCorrectPlace={letter.correctLetterCorrectPlace}
              hasBeenUsed={hasBeenUsed}
            >
              {letter.letter}
            </LetterBox>
          );
        })}
      </div>
    </div>
  );
}

export default Line;
