import sys
n, m = map(int, sys.stdin.readline().rstrip().split())
x = [0] * n

for z in range(1, m+1):
    i, j, k = map(int, sys.stdin.readline().rstrip().split())
    for y in range(i-1, j):
        x[y] = k
print(" ".join(map(str, x)))