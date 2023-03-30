def palin(string):
    n = len(string)
    for i in range(n):
        if string[i] != string[n - 1 - i]:
            return 0

    return 1


print(palin(input()))
