function solution(price) {
    const discounts = [
        {hold: 500000, discount: 0.2},
        {hold: 300000, discount: 0.1},
        {hold: 100000, discount: 0.05}
    ]
                    
    for (let i = 0; i < discounts.length; i++) {
        if (price >= discounts[i].hold) {
            return Math.floor(price * (1 - discounts[i].discount))
        }
    }
    return price
}