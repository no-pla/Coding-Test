function solution(n) {
    let answer = [];
    for(let i = 0; i < n; i++) {
        let temp = Array(n).fill(0);
        temp[i] = 1;
        answer.push(temp);
    }
    return answer;
}