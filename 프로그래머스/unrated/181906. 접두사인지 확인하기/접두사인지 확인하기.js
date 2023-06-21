function solution(my_string, is_prefix) {
    let arr = [];
    let temp = "";
    for (let i = 0; i < my_string.length; i++) {
        temp += my_string[i]
        arr.push(temp)
    }
    console.log(arr)
    return arr.includes(is_prefix) ? 1 : 0
}