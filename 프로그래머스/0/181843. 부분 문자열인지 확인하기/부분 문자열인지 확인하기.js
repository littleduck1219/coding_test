function solution(my_string, target) {
    // return my_string.includes(target) ? 1 : 0
    for (let i = 0; i <= my_string.length; i++) {
        const sub_string = my_string.slice(i, i + target.length);
        
        if (sub_string === target) {
            return 1
        }
    }
    
    return 0
}