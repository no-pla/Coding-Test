function solution(common) {
    let answer = 0;
    let temp = common[1] - common[0];
    for(let i = 1; i < common.length -1; i++) {
        if(common[i + 1] - common[i] === temp) {
            answer += common[common.length - 1] + temp;
            break;
        } else {
            answer += common[common.length - 1] * (common[i + 1] - common[i]) / temp
            break;
        }
    }
    return answer;
}