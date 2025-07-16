function solution(arr, query) {
    for (let i = 0; i < query.length; i++) {
         const queryId = query[i];
        
        if (i % 2 === 0) {
           arr = arr.slice(0, queryId + 1);
        } else {
            arr = arr.slice(queryId)
        }
    }  
    
    return arr;
}