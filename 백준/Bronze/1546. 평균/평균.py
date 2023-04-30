n = int(input())

a = list(map(int, input().split()))
max = 0
for i in range(n):
    if max < a[i]:
        max = a[i]

for i in range(n):
    a[i] = a[i]/max*100

print(sum(a)/n)