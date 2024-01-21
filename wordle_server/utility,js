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
