export function getVocals(sentence) {
    const vocals = ['a', 'e', 'i', 'o', 'u']; 
    const result = []; 

    for (let i = 0; i < sentence.length; i++) {
        const letter = sentence[i].toLowerCase(); 
        if (vocals.includes(letter) && !result.includes(letter)) { 
            result.push(letter); 
        }
    }
    
    return result.join(', '); 
}
