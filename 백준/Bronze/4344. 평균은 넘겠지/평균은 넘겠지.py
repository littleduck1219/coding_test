def mean():
    t = int(input())
    for i in range(t):
        check_students_height = list(map(int, input().split()))
        students_numebr = check_students_height[0]
        student_heights = check_students_height[1:]
        total_height = sum(student_heights)
        height_mean = total_height / students_numebr

        count = 0
        for height in student_heights:
            if height > height_mean:
                count += 1
        percent = (count / students_numebr) * 100

        print("{:.3f}%".format(percent))


mean()