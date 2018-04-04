// Create an array that contains the words in the sentence
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];
let newSentence = ["words", "to", "pad", "out", "this", "sentence", "how", "you", "doing"];
const useNum = 3;

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/

let addExcitement = (theWordArray, addCharacter) => {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
        // Concatenate the new word onto buildMeUp
        let divisible = (i + 1) % useNum;
        let multiple = i / useNum;
        if (divisible === 0) {
            for (a= 0 ; a< multiple; a++) {
                theWordArray[i] += addCharacter;
            }
        }
        buildMeUp += `${theWordArray[i]} `;

    }
    console.log(buildMeUp);

}

// Invoke the function and pass in the array
addExcitement(sentence, "?")
addExcitement(newSentence, "?")