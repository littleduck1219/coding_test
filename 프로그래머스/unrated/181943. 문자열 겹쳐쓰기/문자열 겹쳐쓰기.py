def solution(my_string, overwrite_string, s):
    over_length = len(overwrite_string)
    string_slice = str(my_string[0:s])
    answer = f"{string_slice}{overwrite_string}{my_string[s + over_length:]}"
    
    return answer
