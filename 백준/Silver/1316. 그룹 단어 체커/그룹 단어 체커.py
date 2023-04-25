n = int(input())
count = 0

for i in range(n):
    word = input()
    group_word = True
    used_chars = set()
    prev_char = ''

    for char in word:
        if char not in used_chars:
            used_chars.add(char)
            prev_char = char
        elif char == prev_char:
            continue
        else:
            group_word = False
            break

    if group_word:
        count += 1

print(count)
