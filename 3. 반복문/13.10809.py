s = str(input()).lower()
a = []

for i in range(97, 123):
    if chr(i) in s:
        ss = chr(i)
        b = s.index(ss)
        a.append(b)
    else:
        a.append(-1)

for i in a:
    print(i, end=" ")