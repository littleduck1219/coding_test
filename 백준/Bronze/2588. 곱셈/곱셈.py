a = int(input())
tmp = b = int(input())
for _ in range(3):
    print(a*(b%10))
    b=b//10
print(a*int(tmp))