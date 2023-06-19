function solution(s) {
    const number = {
        "zero": "0",
        "one": "1",
        "two": "2",
        "three": "3",
        "four": "4",
        "five": "5",
        "six": "6",
        "seven": "7",
        "eight": "8",
        "nine": "9"
      };    
    let answer = "";
    let words = "";
    
    for (let i = 0; i < s.length; i++) {
      if (isNaN(s[i])) {
        words += s[i];
  
        if (number.hasOwnProperty(words)) {
          answer += number[words];
          words = "";
        }
      } else {
        answer += s[i];
      }
    }
    return Number(answer);
  }
  