money = int(input())
mount = int(input())

recep = 0
for i in range(mount):
    a, b = map(int, input().split())
    recep += a * b

if recep == money:
    print("Yes")
else:
    print("No")
