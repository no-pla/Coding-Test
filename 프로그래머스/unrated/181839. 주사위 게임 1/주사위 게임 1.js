function solution(a, b) {
    var answer = 0;
    if(a % 2 !== 0 && b % 2 !== 0) {
        answer = Math.pow(a, 2) + Math.pow(b, 2) 
    } else if(a % 2 !== 0 || b % 2 !== 0) {
        answer = (a + b) * 2
    } else {
        answer = Math.abs(a - b)
    }
    return answer;
}