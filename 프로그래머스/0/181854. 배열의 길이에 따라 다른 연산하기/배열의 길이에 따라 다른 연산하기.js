function solution(arr, n) {
    return arr.map((num, idx) => {
        const should = (arr.length & 1) !== (idx & 1);
        return should ? num + n : num;
    })
}