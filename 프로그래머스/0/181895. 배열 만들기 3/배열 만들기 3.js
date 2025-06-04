function solution(arr, intervals) {
    const allParts = intervals.map(interval => {
        const [start, end] = interval;
        return arr.slice(start, end + 1);
    })
    
    return allParts.reduce((acc, part) => acc.concat(part), []);
}