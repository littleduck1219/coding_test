function solution(rsp) {
    return rsp.split("").reduce((prev, curr) => curr == 2 ? prev += "0" : curr == 0 ? prev += "5" : prev += "2", "")
}