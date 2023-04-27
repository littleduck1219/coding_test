def years(x):
    if x%4==0:
        if x%100!=0 or x%400==0:
          print(1)
        else:
          print(0)
    elif x%100!=0:
        print(0)
        
x = int(input())
years(x)