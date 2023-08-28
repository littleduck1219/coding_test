function solution(num_list) {
    const last = num_list[num_list.length - 1];
    const secondLast = num_list[num_list.length - 2];
    
    let newElement;
    
    if (last > secondLast) {
        newElement = last - secondLast;
    } else {
        newElement = last * 2;
    }
    
    num_list.push(newElement);
    return num_list
}