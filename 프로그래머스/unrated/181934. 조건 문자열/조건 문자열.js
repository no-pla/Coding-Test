function solution(ineq, eq, n, m) {
    let answer = 0;
    if((eq === '=' && n === m) || (ineq === '<' && n < m) || (ineq === '>' && n > m)) {
        answer = 1;
    }
    return answer;
}