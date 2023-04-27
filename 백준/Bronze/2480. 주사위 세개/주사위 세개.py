a, b, c = map(int, input().split())

if a == b:
    if c == a:
        print(10000 + a * 1000)
    else:
        print(1000 + a * 100)
elif a == c:
    if a == b:
        print(10000 + a * 1000)
    else:
        print(1000 + a * 100)
elif b == c:
    if b == a:
        print(10000 + a * 1000)
    else:
        print(1000 + b * 100)
elif a != b != c:
    maximum = a
    for i in [b, c]:
        if maximum < i:
            maximum = i
    print(maximum * 100)