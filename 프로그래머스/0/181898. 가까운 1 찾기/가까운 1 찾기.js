function solution(arr, idx) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1 && i >= idx) {
            return i;
        }
        console.log(i)
    }
    return -1;
}