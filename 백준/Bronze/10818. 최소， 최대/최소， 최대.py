import sys

n = int(sys.stdin.readline().rstrip())
a = list(map(int, sys.stdin.readline().rstrip().split()))
max = -1000000
min = 1000000

for i in a:
    if i < min:
        min = i
    if max < i:
        max = i
print(min, max)