input = "hello my name is sparta"


def find_max_occurred_alphabet(string):
    alphabet_array = ["a", "b", "c", "d", "e", "f", "g", "h", "i" "j", "k", "l", "n", "m", "o", "p", "q", "r", "s",
                      "t", "u", "v", "w", "x", "y", "z"]

    max_occurrence = 0
    for alphabet in alphabet_array:
        occurrence = 0
        for char in string:
            if char == alphabet:
                occurrence += 1

        if occurrence > max_occurrence:
            max_occurrence = occurrence
            max_alphabet = alphabet

    return max_occurrence


result = find_max_occurred_alphabet(input)
print(result)