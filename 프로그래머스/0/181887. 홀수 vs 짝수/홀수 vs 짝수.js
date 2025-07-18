function solution(num_list) {
    let a = [];
    let b = [];
    
    for (let i = 0; i < num_list.length; i++) {
        if (i % 2 === 0) {
            a.push(num_list[i])
        } else {
            b.push(num_list[i])
        }
    }
    
    const sumA = a.reduce((acc, cur) => {
        return acc + cur
    }, 0)
    const sumB = b.reduce((acc, cur) => {
        return acc + cur
    }, 0)
    
    console.log("sumA",sumA)
    console.log("sumB",sumB)
    
    const big = sumA > sumB ? sumA : sumB;
    
    return big;
}
    