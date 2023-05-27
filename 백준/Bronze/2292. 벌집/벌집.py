n = int(input())

start_num = 1
count = 1

while n > start_num:
    start_num += 6 * count
    count += 1
print(count)