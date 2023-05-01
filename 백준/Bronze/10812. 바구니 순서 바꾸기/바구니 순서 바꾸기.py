n ,m = map(int, input().split())

list = [i for i in range(1, n+1)]

for x in range(m):
    i, j, k = map(int, input().split())

    rotate = list[i-1:j]
    mid = k - i
    rotated = rotate[mid:] + rotate[:mid]
    list[i-1:j] = rotated

print(" ".join(map(str, list)))
