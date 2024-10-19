export function getVocals(sentence) {
    const vocals = ['a', 'e', 'i', 'o', 'u'];
    let result = '';
    
    for (let i = 0; i < sentence.length; i++) {
        const letter = sentence[i].toLowerCase();
        if (vocals.includes(letter)) {
            result += letter;
            if (i < sentence.length - 1 && vocals.includes(sentence[i + 1].toLowerCase())) {
                result += ',';
            }
        }
    }
    return result;
}