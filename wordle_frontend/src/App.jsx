import "./App.css";
import Line from "./components/Line";
import { useEffect, useRef } from "react";

import "./App.css";

function App() {
  const WORD_LENGTH = 5;
  const NUMBER_OF_ATTEMPTS = 6;

  /* manually setting input refs, tried to do in a for loop but had a red squiggly */
  const firstInput = useRef(null);
  const secondInput = useRef(null);
  const thirdInput = useRef(null);
  const fourthInput = useRef(null);
  const fifthInput = useRef(null);
  const sixthInput = useRef(null);

  const attempts = [];

  for (let i = 0; i < NUMBER_OF_ATTEMPTS; i++) {
    attempts.push(i + 1);
  }

  const inputRefs = [
    firstInput,
    secondInput,
    thirdInput,
    fourthInput,
    fifthInput,
    sixthInput,
  ];

  useEffect(() => {
    inputRefs[0].current.focus();
  });

  function changeInput(currentInput) {
    const currentInputRefIndex = inputRefs.indexOf(currentInput);

    if (currentInputRefIndex == inputRefs.length - 1) {
      return;
    }

    inputRefs[currentInputRefIndex + 1].current.focus();
  }

  return (
    <div
      style={{
        width: "50%",
        borderRadius: "5px",
        backgroundColor: "skyblue",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "absolute",
        left: "50%",
        translate: "-50%",
        paddingBottom: "1rem",
        fontFamily: "sans-serif",
      }}
    >
      {attempts.map((attempt, index) => {
        return (
          <Line
            handleInputChange={changeInput}
            inputRef={inputRefs[index]}
            attempt={attempt}
            count={WORD_LENGTH}
            key={attempt}
          />
        );
      })}
    </div>
  );
}

export default App;
