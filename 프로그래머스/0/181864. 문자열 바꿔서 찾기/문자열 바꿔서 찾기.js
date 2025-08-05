function solution(myString, pat) {
    return myString.split("").map(item => item === "A" ? "B" : "A").join("").includes(pat) ? 1 : 0;
}