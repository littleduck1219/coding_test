def world_test(string):
    string = string.lower()  # 입력받은 문자열을 소문자로 변환
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
        return chr(max_indices[0] + ord("A"))  # 반환값을 대문자로 출력


print(world_test(input().lower()))