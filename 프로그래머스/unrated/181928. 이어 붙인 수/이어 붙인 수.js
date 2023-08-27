function solution(num_list) {
    let num_a = [];
    let num_b = [];
    let sum_a = "";
    let sum_b = "";
    
    for (let i = 0; i<num_list.length; i++) {
        if (num_list[i]%2 === 0) {
            num_a.push(num_list[i])
        } else {
            num_b.push(num_list[i])
        }
    }
    num_a.forEach(num => {
        sum_a += num
    })
    num_b.forEach(num => {
        sum_b += num
    })
    return parseInt(sum_a) + parseInt(sum_b)
}