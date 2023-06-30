def solution(x, n):
    answer = []
    if x == 0:
        for x in range(x, n):
            answer.append(0)
    else:
        for x in range(x, n * x + x, x):
            answer.append(x)
    return answer