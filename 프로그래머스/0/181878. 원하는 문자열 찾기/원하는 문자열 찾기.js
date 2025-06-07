function solution(myString, pat) {
    const lowMyString = myString.toLowerCase();
    const lowPat = pat.toLowerCase();
    
    if (lowMyString.includes(lowPat)) {
        return 1;
    } else return 0;
}