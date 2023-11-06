finding_target = 14
finding_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]


def is_existing_target_number_binary(target, array):
    min_num = 0
    max_num = len(array) - 1
    guess_num = (min_num + max_num) // 2
    count = 0

    while min_num <= max_num:
        count += 1
        if array[guess_num] == target:
            print(count)
            return True

        elif array[guess_num] < target:
            min_num = guess_num + 1

        else:
            max_num = guess_num - 1

        guess_num = (min_num + max_num) // 2

    return False


result = is_existing_target_number_binary(finding_target, finding_numbers)
print(result)
