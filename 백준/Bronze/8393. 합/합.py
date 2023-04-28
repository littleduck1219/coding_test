

def answer(x):
  s = 0
  for i in range(1, x + 1):
    s = s + i
  return s
x = int(input())
print(answer(x))