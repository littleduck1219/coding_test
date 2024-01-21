function solution(my_string, num1, num2) {
    var char = my_string.split("")
    
    var temp = char[num1]
    char[num1] = char[num2]
    char[num2] = temp
    
    
 

    return char.join("")
}