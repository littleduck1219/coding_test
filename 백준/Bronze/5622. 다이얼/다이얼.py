def dial(word):
    dial_dict = {
        "ABC": 3, "DEF": 4, "GHI": 5, "JKL": 6, "MNO": 7, "PQRS": 8, "TUV": 9, "WXYZ": 10
    }
    number = 0

    for char in word:
        for key, value in dial_dict.items():
            if char in key:
                number += value
                break
    return number


word = input()
result = dial(word)
print(result)