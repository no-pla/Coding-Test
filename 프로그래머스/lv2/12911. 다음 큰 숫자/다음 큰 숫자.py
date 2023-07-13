def solution(n):
    for number in range(n + 1, 1000001):
        if bin(n).count('1') == bin(number).count('1'):
            return number