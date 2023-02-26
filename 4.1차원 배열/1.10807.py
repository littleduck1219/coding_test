import sys

t = int(sys.stdin.readline().rstrip())
a = list(map(int, sys.stdin.readline().rstrip().split()))
b = int(sys.stdin.readline().rstrip())
cnt = 0
for i in a:
    if i == b:
        cnt += 1
print(cnt)
