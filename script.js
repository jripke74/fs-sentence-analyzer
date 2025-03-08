function getVowelCount(sentence) {
  let numberOfVowels = 0;
  for (const char of sentence) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      numberOfVowels += 1;
    }
  }
  console.log(numberOfVowels);
  return numberOfVowels;
}

getVowelCount("aa");
