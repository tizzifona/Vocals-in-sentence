export function getVocals(sentence) {
    const vocals = ['a', 'e', 'i', 'o', 'u']; 
    const result = []; 

    for (let i = 0; i < sentence.length; i++) {
        const letter = sentence[i].toLowerCase(); 
        if (vocals.includes(letter) && !result.includes(letter)) { 
            result.push(letter); 
        }
    }

    if (result.length === 0) {
        return 'No vowels found in the sentence.';
    }
    
    return result.join(', '); 
}
