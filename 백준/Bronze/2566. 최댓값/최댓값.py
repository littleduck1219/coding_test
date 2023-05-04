matrix = []
for i in range(9):
    row = list(map(int, input().split()))
    matrix.append(row)

max_num = matrix[0][0]
max_i = 1  # 변수 초기화
max_j = 1  # 변수 초기화
for i in range(9):
    for j in range(9):
        if max_num < matrix[i][j]:
            max_num = matrix[i][j]
            max_i = i + 1
            max_j = j + 1

print(max_num)
print(max_i, max_j)
