n = int(input())

line = 0
end = 0

while n > end:
    line += 1
    end += line

row = end - n
if line % 2 == 0:
    top = line - row
    bottom = row + 1
else:
    top = row + 1
    bottom = line - row

print(f"{top}/{bottom}")
