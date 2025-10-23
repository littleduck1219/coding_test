function solution(str_list, ex) {
    const list = [];
    
    for (let i = 0; i < str_list.length; i++) {
        if (str_list[i].includes(ex)) {
            continue;
        }
        
         list.push(str_list[i])
    }
    
    return list.join("")
}