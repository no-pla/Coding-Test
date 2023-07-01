function solution(code) {
    let answer = '';
    let mode = 0;
    for(let idx in code) {
        if(code[idx] === '1') {
            mode = mode === 1 ? 0 : 1;
        } else if(idx % 2 === 0 && mode === 0) {
            answer += code[idx];
        } else if(idx % 2 && mode) {
            answer += code[idx];
        }
    }
    return answer === "" ? "EMPTY" : answer;
}