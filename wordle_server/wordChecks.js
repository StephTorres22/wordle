function compareCounts(array) {
    const inputLetterOccurrences = getLetterCountFromInputWord(word);
    const map = lettersMap;

    const updatedArray = [...array];

    for (const letter in inputLetterOccurrences) {
      if (map.has(letter)) {
        const count = map.get(letter);
        if (inputLetterOccurrences[letter] > count) {
          const numberOfChanges = inputLetterOccurrences[letter] - count;
          const letterObjsToEdit = array.filter(
            (letterObj) =>
              letterObj.letter == letter &&
              letterObj.correctLetterCorrectPlace !== true
          );

          /* work backwards through letterObjsToEdit array */
          for (let i = numberOfChanges - 1; i >= 0; i--) {
            const updatedObj = { ...letterObjsToEdit[i], correctLetter: false };
            updatedArray[updatedObj.index] = updatedObj;
          }
        }
      }
    }

    return updatedArray;
  }

  function checkAllLetters(word, targetWord) {
    const updatedLetterObjsArray = [];
    for (let i = 0; i < word.length; i++) {
      const updatedTargetLetter = {
        ...letterObjs[i],
        correctLetter: checkWordHasLetter(word[i], targetWord),
        correctLetterCorrectPlace: rightLetterRightPosition(
          word[i],
          targetWord[i]
        ),
      };

      updatedLetterObjsArray.push(updatedTargetLetter);
    }

    setLetterObjs(() => compareCounts(updatedLetterObjsArray));
  }