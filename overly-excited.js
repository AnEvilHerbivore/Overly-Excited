// Create an array that contains the words in the sentence
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];
const useNum = 3;

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
function addExcitement (theWordArray, addCharacter) {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
        // Concatenate the new word onto buildMeUp
        let divisible = i % useNum;
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
addExcitement(sentence, "!")