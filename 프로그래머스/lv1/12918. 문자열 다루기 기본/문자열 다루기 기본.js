function solution(s) {
    const length = s.length;
    const regex = /^\d+$/;
    if (length === 4 || length === 6) {
        return regex.test(s);
    }
    return false;
}