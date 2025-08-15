function solution(num_list) {
    var answer = [];
    let sort = num_list.sort((a, b) => a - b)

    console.log(sort)
    
    return sort.slice(0, 5);
}