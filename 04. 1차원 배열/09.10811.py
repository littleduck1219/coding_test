import sys
n, m = map(int, input().split())
a = list(range(1, n+1))
for _ in range(m):
    i, j = map(int, input().split())
    for x in range((j-i+1)//2):
        a[i-1+x], a[j-1-x] = a[j-1-x], a[i-1+x]

for x in a:
    print(x, end=" ")
