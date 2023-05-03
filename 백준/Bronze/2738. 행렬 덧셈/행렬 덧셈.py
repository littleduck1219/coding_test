n, m = map(int, input().split())

metrix_a = []
for i in range(n):
    row = list(map(int, input().split()))
    metrix_a.append(row)

metrix_b = []
for i in range(n):
    row = list(map(int, input().split()))
    metrix_b.append(row)

result = []
for i in range(n):
    row = []
    for j in range(m):
        row.append(metrix_a[i][j] + metrix_b[i][j])
    result.append(row)

for row in result:
    print(" ".join(str(x) for x in row))