function compareCounts(array, targetWord) {
  const inputLetterOccurrences = getLetterCountFromInputWord(
    getWordFromUserData(array)
  );
  const map = getLetterOccurencesMap(targetWord);
  const updatedArray = [...array];

  for (const letter of Object.keys(inputLetterOccurrences)) {
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

export function checkAllLetters(data, targetWord) {
  const updatedLetterObjsArray = [];
  const word = getWordFromUserData(data);
  for (let i = 0; i < data.length; i++) {
    const updatedTargetLetter = {
      ...data[i],
      correctLetter: checkWordHasLetter(word[i], targetWord),
      correctLetterCorrectPlace: rightLetterRightPosition(
        word[i],
        targetWord[i]
      ),
    };

    updatedLetterObjsArray.push(updatedTargetLetter);
  }

  return compareCounts(updatedLetterObjsArray, targetWord);
}

export function checkWord(word, targetWord) {
  return word === targetWord;
}

export function checkWordHasLetter(letter, targetWord) {
  return targetWord.includes(letter);
}

export function rightLetterRightPosition(letter, targetLetter) {
  return targetLetter === letter;
}

export function letterObjFactory(
  index,
  letter,
  correctLetter = false,
  correctLetterCorrectPlace = false
) {
  return { index, letter, correctLetter, correctLetterCorrectPlace };
}

export function getLetterOccurencesMap(word) {
  const lettersMap = new Map();

  for (let i = 0; i < word.length; i++) {
    if (!lettersMap.has(word[i])) {
      lettersMap.set(word[i], 1);
    } else {
      const currentValue = lettersMap.get(word[i]);
      lettersMap.set(word[i], currentValue + 1);
    }
  }
  return lettersMap;
}
export function getLetterCountFromInputWord(word) {
  const wordArray = word.split("");

  const duplications = {};
  for (const letter of wordArray) {
    duplications[letter] = duplications[letter] ? duplications[letter] + 1 : 1;
  }
  //i find this hard to understand.
  /* const duplications = wordArray.reduce((acc, curr) => {
      return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
    }, {}); */

  return duplications;
}

export function getWordFromUserData(data) {
  let word = "";

  for (let i = 0; i < data.length; i++) {
    word += data[i].letter;
  }

  return word.toUpperCase();
}
