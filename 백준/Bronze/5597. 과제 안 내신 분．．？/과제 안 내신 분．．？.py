f = [0 for i in range(30)]

for i in range(28):
    n = int(input())
    f[n-1] = 1
for i in range(30):
    if f[i] == 0:
        print(i+1)
