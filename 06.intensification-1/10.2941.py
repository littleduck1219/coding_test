word = input()
croatian = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z=']
count = 0

while word:
    if word[:2] in croatian:
        count += 1
        word = word[2:]
    elif word[:3] in croatian:
        count += 1
        word = word[3:]
    else:
        count += 1
        word = word[1:]

print(count)