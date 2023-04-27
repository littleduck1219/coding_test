hour, minute = map(int, input().split())
timer = int(input())

cook_minute = minute + timer

if hour <= 23 and cook_minute < 60:
    print(hour, cook_minute)
elif hour + (cook_minute // 60) > 23 and cook_minute >= 60:
    print((hour + cook_minute // 60) - 24, cook_minute % 60)
elif hour + (cook_minute // 60) <= 23 and cook_minute >= 60:
    print(hour + cook_minute // 60, cook_minute % 60)