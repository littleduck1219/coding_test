function solution(rank, attendance) {
//     const students = [];
//     for (let i = 0; i < rank.length; i++) {
//         if (attendance[i]) {
//             students.push({studentId: i, rank: rank[i]})
//         }
//     }
    
//     students.sort((a, b) => a.rank - b.rank);
    
//     const selected = students.slice(0, 3);
    
//     return selected[0].studentId * 10000 +
//            selected[1].studentId * 100 +
//            selected[2].studentId;
    
    return rank
        .map((r, i) => ({ studentId: i, rank: r, canAttend: attendance[i] }))
        .filter(student => student.canAttend)
        .sort((a, b) => a.rank - b.rank)
        .slice(0, 3)
        .reduce((result, student, index) => 
            result + student.studentId * Math.pow(100, 2 - index), 0
        );
}