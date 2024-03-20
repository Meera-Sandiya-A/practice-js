// Sentence Smash (combine sentence)
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence.
// You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word.
// Be careful, there shouldn't be a space at the beginning or the end of the sentence!

function smash(words) {
  let word = "";

  for (let i = 0; i < words.length; i++) {
    word = word + words[i];

    if (i !== words.length - 1) {
      word = word + " ";
    }
  }
  return word;
}
console.log(smash(["hello", "world", "meera"]));
