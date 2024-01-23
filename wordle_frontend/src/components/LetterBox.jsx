/* eslint-disable react/prop-types */
function LetterBox({
  children,
  correctLetter,
  correctLetterCorrectPlace,
  hasBeenUsed,
}) {
  const styles = {
    height: "6.5rem",
    width: "5rem",

    placeSelf: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: setBackgroundColour(),
    borderRadius: "10px",
  };

  /* make backgroundColor a function */
  function setBackgroundColour() {
    if (correctLetterCorrectPlace && correctLetter) {
      return "green";
    }

    if (correctLetter) {
      return "yellow";
    }

    if (hasBeenUsed) {
      return "darkGray";
    }

    return "lightGray";
  }

  return (
    <div className="letterBox" style={styles}>
      {children}
    </div>
  );
}

export default LetterBox;
