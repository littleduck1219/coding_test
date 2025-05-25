function solution(my_string, indices) {
    const stringArr = my_string.split("");
    
    indices.sort((a, b) => b - a);
    
    console.log(indices)
    
    for (let i = 0; i < indices.length; i++) {
        stringArr.splice(indices[i], 1);
    }
    return stringArr.join("")
}