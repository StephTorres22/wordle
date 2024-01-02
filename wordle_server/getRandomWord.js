import fetch from "node-fetch";
/* Playing around with random word apis */

export async function getRandomWord() {
  const data = await fetch(
    "https://random-word-api.herokuapp.com/word?length=5"
  );
  const word = await data.json();
  return word[0];
}
