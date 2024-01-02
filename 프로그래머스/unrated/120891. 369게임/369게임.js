function solution(order) {
    var answer = 0;
    let splitOrder = order.toString().split("")
    
    for (let i = 0; i < splitOrder.length; i++) {
        if (splitOrder[i] === "3" || splitOrder[i] === "6" || splitOrder[i] === "9") answer++
    } 
    
    return answer;
}