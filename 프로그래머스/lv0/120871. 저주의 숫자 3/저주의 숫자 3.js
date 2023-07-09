function solution(n) {
    let answer = n;
    for(let i = 3; i <= n; i++) {
        if(String(i).includes('3') || i % 3 === 0) {
            answer += 1;
        }
        while(String(answer).includes('3') || answer % 3 === 0) {
            answer += 1;
        }
    }
    return answer;
}