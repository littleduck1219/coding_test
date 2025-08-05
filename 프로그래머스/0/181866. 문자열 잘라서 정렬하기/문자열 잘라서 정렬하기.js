function solution(myString) {
    return myString.split("x").filter(x => x.length > 0).sort()
}