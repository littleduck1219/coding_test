function solution(myStr) {
    const result = myStr.split(/[abc]/);
    const filter = result.filter( s => s.length > 0);
    
    if (filter.length === 0) {
        return ["EMPTY"]
    } else {
        return filter
    }
}