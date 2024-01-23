export function letterObjFactory(
  index,
  letter,
  correctLetter = false,
  correctLetterCorrectPlace = false
) {
  return { index, letter, correctLetter, correctLetterCorrectPlace };
}
