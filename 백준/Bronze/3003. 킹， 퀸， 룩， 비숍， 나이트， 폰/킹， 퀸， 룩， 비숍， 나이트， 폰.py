pices=list(map(int, input().split()))
chess_set=[1,1,2,2,2,8]
need_set=""
  
for i in range(len(pices)):
  need_set += str(chess_set[i] - pices[i])+ " "
print(need_set)