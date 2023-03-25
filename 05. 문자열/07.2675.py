t = int(input())

for i in range(t):
    repeat, string = input().split()
    for j in string:
        print(j * int(repeat), end="")
    print()
