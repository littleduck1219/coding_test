def world_test(string):
    alphabets = [0] * 26

    for i in range(len(string)):
        index = ord(string[i]) - ord("a")
        alphabets[index] += 1

    max_value = max(alphabets)
    max_indices = []
    for i in range(len(alphabets)):
        if alphabets[i] == max_value:
            max_indices.append(i)

    if len(max_indices) > 1:
        return "?"
    else:
        return chr(max_indices[0] + ord("a"))


print(world_test(input().lower()))