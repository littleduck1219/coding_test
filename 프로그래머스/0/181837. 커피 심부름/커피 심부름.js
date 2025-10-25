function solution(order) {
    let price = 0;
    
    for (let i = 0; i < order.length; i++) {
        if (order[i].includes("americano")) {
            price += 4500;
        } else if (order[i].includes("latte")) {
            price += 5000;
        } else if (order[i] === "anything") {
            price += 4500
        }
    }
    
    return price
}