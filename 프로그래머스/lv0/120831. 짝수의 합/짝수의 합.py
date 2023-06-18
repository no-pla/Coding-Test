def solution(n):
    answer = 0
    while n >= 2:
        if n % 2 == 0:
            answer += n
        n -= 1
    return answer