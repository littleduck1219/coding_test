function solution(s) {
  const charCounts = {};

  for (const char of s) {
    charCounts[char] = (charCounts[char] || 0) + 1;
  }
    
  let result = "";
    
  for (const char of Object.keys(charCounts).sort()) {
    if (charCounts[char] === 1) {
      result += char;
    }
  }

  return result || "";
}