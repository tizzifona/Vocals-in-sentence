import { getSentence } from "./getSentence.js";
import { searchVocals } from "./searchVocals.js";
import { deleteDuplicity } from "./deleteDuplicity.js";
import { getVocals } from "./getVocals.js";


const selectFunction = document.getElementById('selectFunction');
const textInput = document.getElementById('textInput');
const submitButton = document.getElementById('submitButton');
const displayResult = document.getElementById('displayResult');

submitButton.addEventListener('click', () => {
    const selectedFunction = selectFunction.value;  
    const text = textInput.value;  
    let result;

    switch (selectedFunction) {
        case 'getSentence':
            result = getSentence(text);
            break;
        case 'searchVocals':
            result = searchVocals(text);
            break;
        case 'deleteDuplicity':
            result = deleteDuplicity(text.split('')); 
            break;
        case 'getVocals':
            result = getVocals(text);
            break;
        default:
            result = 'Unknown function';
    }

    displayResult.innerHTML = `Result: ${result}`;
});