hour, minute = map(int, input().split())

if hour == 0:
    if minute < 45:
        hour = 23
        minute = minute + 15
    elif minute > 44:
        minute = minute - 45
else:
    if minute > 44:
        minute = minute - 45
    elif minute < 45:
        hour = hour - 1
        minute = minute + 15

print(hour, minute)

