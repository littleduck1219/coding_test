

def stars(num):
    for i in range(1, num+1):
        left_spaces = num - i
        stars = i * 2 - 1
        line = " " * left_spaces + "*" * stars
        print(line)

    for i in range(num-1, 0, -1):
        left_spaces = num - i
        stars = i * 2 - 1
        line = " " * left_spaces + "*" * stars
        print(line)


num = int(input())
stars(num)