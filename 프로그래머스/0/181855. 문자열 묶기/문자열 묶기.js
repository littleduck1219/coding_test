function solution(strArr) {
//     let countArr = [];
//     for (let i = 0; i < strArr.length; i++) {
//         countArr.push(strArr[i].length)
//     }
    
//     let freq = {};
//     for (let length of countArr) {
//         freq[length] = (freq[length] || 0) + 1;
//     }
//     console.log(freq)
//     return Math.max(...Object.values(freq))

    let count = new Map();
    for (const str of strArr) {
        const length = str.length;
        count.set(length, (count.get(length) || 0) + 1)
    }     
    console.log(count.values())
    return Math.max(...count.values())
    
}