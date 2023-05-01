number = map(str, input().split())
reverse = ""
max_num = 0
for i in number:
    for j in i:
        reverse = j + reverse

    if int(max_num) < int(reverse):
        max_num = reverse

    reverse = ""
print(max_num)
