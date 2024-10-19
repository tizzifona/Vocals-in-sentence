export function deleteDuplicity(list) {
    const newList = [];  
    for (let i = 0; i < list.length; i++) {  
        if (!newList.includes(list[i])) {  
            newList.push(list[i]);  
        }
    }
    
    return newList;  
}