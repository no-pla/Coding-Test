function solution(n) {
    let answer = 0;
    for(let i = n; i >= 4; i--) {
        let temp = 0;
        for(let j = i; j > 0; j--) {
            if(i % j === 0) {
                temp++;
            }
        }
        if(temp >= 3) answer++
    }
    return answer;
}