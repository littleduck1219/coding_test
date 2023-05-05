metrix = []
for _ in range(5):
    metrix.append(input().strip())

max_len = max(map(len, metrix))
result = ""

for i in range(max_len):
    for word in metrix:
        if i < len(word):
            result += word[i]

print(result)

