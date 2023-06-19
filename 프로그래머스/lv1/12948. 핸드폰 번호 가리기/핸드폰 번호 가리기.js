function solution(phone_number) {
    let star = "*".repeat(phone_number.length-4) 
    return `${star}${phone_number.slice(-4)}`
}