function solution(n) {
    let answer = [];
    let temp = 2;
    while(temp <= n || n === 0) {
        if(n % temp === 0) answer.push(temp);
        while(n % temp === 0) {
            n /= temp;
        }
        temp++;
    }
    return answer;
}