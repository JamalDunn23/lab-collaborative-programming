//WORKED WITH NATALIE V.


const morseCodeDictionary = require("./morse-code-dictionary.json");

/**
 * Returns an array of all of the words sorted by length, shortest first
 * @param {String[]}  - An array of strings.
 * @returns {string[]} An array of strings.
 */
function sortByStringLength(strings) {

  return strings.sort((cee, bee) => cee.length - bee.length);// We used a high order function to resolve this. The .sort was used to sort the objects within the array and we had two call-back functions in order to organize what the lengths of those objects were, by subtracting. 

};
/**
 * Returns an array of the word in all scrolling positions.
 * @param {String} word - A string.
 * @returns {string[]} An array of strings
 * Example: "Hello"
 * [ 'elloH', 'lloHe', 'loHel', 'oHell', 'Hello' ]
 */
function textScroller(word) {

  let myWord = word.split("");
  let arrayOfWords = [];

  for (let i = 0; i < myWord.length; i++) {
    myWord.push(myWord.shift());

    arrayOfWords.push(myWord.join(""));
  }
  return arrayOfWords;
}

/**
 * Returns the difference between the largest and smallest number in the array
 * @param {Number[]} numbers - An array of numbers.
 * @returns {Number} The difference between the largest and smallest number.
 */
function betweenExtremes(numbers) {
  let arrayOfSubtraction = [];

  for (let number of numbers) {
    if (typeof number === 'string' || numbers.length === 0) {
      return numbers;
    }
  }

  const smallestNumber = Math.min(...numbers);
  const biggestNumbers = Math.max(...numbers);
  const subTraction = biggestNumbers - smallestNumber

  return subTraction;

}
/**
 * Returns the difference between the largest and smallest number in the array
 * @param {String} message - A string to translate.
 * @param {Object[]} dictionary - A morse code dictionary ( use the one imported at the top of this file)
 * @returns {Number} The message in morse code
 * Example: "A new month"
 * .- / -. . .-- / -- --- -. - ....
 */
function morseCodeTranslator(message, dictionary) {
  const note = []

  for (let i = 0; i < message.length; i++) {
    const newNote = message[i].toUpperCase().split("");

    const newWords = dictionary[newNote];

    if (newWords) {
      note.push(newWords)
    }

  }

  return (note.join(" "))

}


module.exports = {
  sortByStringLength,
  textScroller,
  betweenExtremes,
  morseCodeTranslator,
};
