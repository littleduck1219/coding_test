function solution(n) {
    const answer = Array.from({length:n}, () => Array(n).fill(0));
    
    const dr = [0, 1, 0, -1];
    const dc = [1, 0, -1, 0];
    
    let row = 0;
    let col = 0;
    let dir = 0;
    let num = 1;
    
    while (num <= n * n) {
        answer[row][col] = num;
        
        let nextRow = row + dr[dir];
        let nextCol = col + dc[dir];
        
        if (nextRow < 0 || nextRow >= n || 
            nextCol < 0 || nextCol >= n || 
            answer[nextRow][nextCol] !== 0) {
            dir = (dir + 1) % 4;
        }

        row += dr[dir];
        col += dc[dir];
        
     
        num++;
    }

    return answer;
}