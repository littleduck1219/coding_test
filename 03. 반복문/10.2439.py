# 별 찍기 2
import sys
n = int(sys.stdin.readline().rstrip())
for i in range(n):
    print(" " * (n-1-i) + "*" * (i+1))
