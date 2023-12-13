function solution(box, n) {
    const countPerDimension = box.map(dimension => Math.floor(dimension / n));
    return countPerDimension.reduce((acc, cur) => acc * cur);
}
