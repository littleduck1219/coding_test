import sys

n, m = map(int, sys.stdin.readline().rstrip().split())

basket = [i for i in range(1, n+1)]

for x in range(m):
    i, j = map(int, sys.stdin.readline().rstrip().split())
    basket[i-1], basket[j-1] = basket[j-1], basket[i-1]

print(*basket)
