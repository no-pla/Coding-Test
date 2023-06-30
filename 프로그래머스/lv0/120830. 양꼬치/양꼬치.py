def solution(n, k):
    answer = n * 12000 + 2000 * k
    if n >= 10:
        answer -= (n // 10) * 2000
    return answer