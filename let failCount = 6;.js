let failCount = 6;
let words = ["apple", " orange", "pineapple", "potato"];
let word = words[Math.floor(Math.random() * words.length)];
let remainingLetters = word.length;
let answerArray = [];
for (let i = 0; i < word.length; i++) {
  answerArray[i] = "_";
 }

// while (remainingLetters < 0 && failCount > 0) {
//   let guessLetter = prompt("Tippelj egy betűre:").toLowerCase()
//   console.log(guessLetter)
//   if (guess.length !== 1) {
//    let singleLetter= prompt("guess a SINGLE letter");
//   } else {
//     for (let j = 0; j < word.length; j++) {
//       if (word[j] === guess) {
//         answerArray[j] = guess;
//         ramainingLetters--;
//       }
//     }
//   }
// }

while (remainingLetters > 0 && failCount > 0) {
  let guessLetter = prompt("Tippelj egy betűre:").toLowerCase();

  if (guessLetter.length !== 1 || !/[a-z]/.test(guessLetter)) {
    console.log("Kérlek, tippelj egyetlen betűt.");
  } else {
    let rigthAnswer = false;

    for (let j = 0; j < word.length; j++) {
      if (word[j] === guessLetter) {
        answerArray[j] = guessLetter;
        remainingLetters--;
        rigthAnswer = true;
      }
    }

    if (!rigthAnswer) {
      failCount--;
    }

    console.log("Szó: " + answerArray.join(" "));
    console.log("Hátralévő betűk: " + remainingLetters);
    console.log("Hiba számláló: " + failCount);
  }
}

if (remainingLetters === 0) {
  console.log("Gratulálok! Kitaláltad a szót: " + word);
} else {
  console.log("Sajnálom, elfogytak a próbálkozásaid. A szó: " + word);
}