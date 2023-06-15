function solution(n) {
    let answer = 0;
    while(true) {
        answer++;
        if(n % answer === 1) break;
    }
    return answer;
}