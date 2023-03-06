list = []

for i in range(10):
    list.append(int(input()))
    list[i] = list[i] % 42
ans = set(list)
print(len(ans))