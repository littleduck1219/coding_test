function solution(order) {
//     return order.reduce((acc, cur) => {
        
//         if (cur.includes("latte")) {
//             return acc + 5000
//          }
    
//         return acc + 4500
//     }, 0)
    return order.map((coffee) => coffee.includes("latte") ? 5000 : 4500).reduce((acc, cur) => acc + cur, 0)
}