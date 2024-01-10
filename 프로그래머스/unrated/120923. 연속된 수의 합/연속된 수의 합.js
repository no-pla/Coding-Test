function solution(num, total) {
    let answer = [];
    let mark = Math.floor(total / num);
    
    if(num % 2) {
        answer.push(mark);
        for(let i = 1; i <= Math.floor(num / 2); i++) {
            answer.unshift(mark - i);
            answer.push(mark + i);
        } 
    } else {
        answer.push(mark)
        for(let i = 1; i <= num / 2; i++) {
            answer.push(mark + i);
        }
        for(let i = 1; i <= num / 2 - 1; i++) {
            answer.unshift(mark - i);
        }
    }
    return answer;
}
