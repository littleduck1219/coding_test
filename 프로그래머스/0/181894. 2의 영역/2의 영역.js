function solution(arr) {
    const firstTwoIndex = arr.indexOf(2);
    const lastTwoIndex = arr.lastIndexOf(2);
    
    if (firstTwoIndex === -1) {
        return [-1];
    }
    
    return arr.slice(firstTwoIndex, lastTwoIndex + 1);
}