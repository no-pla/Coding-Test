function solution(n) {
    let answer = 0;
    let factorial = function(n) {
        if(n <= 1) return 1;
        return n * factorial(n - 1);
    }
    
    while(factorial(answer + 1) <= n) {
        answer++;
    }
    return answer;
}