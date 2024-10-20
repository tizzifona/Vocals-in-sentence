export function searchVocals(sentence) {
    const vocals = ['a', 'e', 'i', 'o', 'u'];  
    const result = []; 
    const newSentence = sentence.toLowerCase();  
    
    for (let i = 0; i < newSentence.length; i++) {  
        if (vocals.includes(newSentence[i])) {  
            result.push(newSentence[i]);  
        }
    }

    if (result.length === 0) {
        return 'No vocals found in the sentence.';
    }
    
    return result;  
}