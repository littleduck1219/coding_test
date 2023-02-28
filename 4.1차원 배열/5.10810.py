import sys

n, m = map(int, sys.stdin.readline().rstrip().split())

basket = [0] * (n + 1)  # 바구니 정보를 저장할 리스트 생성

for i in range(m):
    a, b, color = map(int, sys.stdin.readline().rstrip().split())
    for j in range(a, b + 1):
        basket[j] = color  # 바구니 정보 업데이트
    print(*basket[1:])  # 바구니 정보 출력 (첫 번째 바구니는 빈칸으로 출력)