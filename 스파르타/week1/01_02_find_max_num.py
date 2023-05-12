input = [3, 5, 6, 1, 2, 4]


def find_max_num(array):
    num_max = 0
    for i in input:
        if i > num_max:
            num_max = i
    return num_max


result = find_max_num(input)
print(result)