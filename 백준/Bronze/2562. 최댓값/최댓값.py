# 최댓값
import sys

a = [int(sys.stdin.readline().rstrip()) for i in range(9)]
max = 0
for idx, i in enumerate(a):
    if max < i:
        max = i
        num = idx
print(f"{max}\n{num+1}")
