function solution(absolutes, signs) {
    let answer = 0;
    signs.forEach((sign, index) => {
        sign ? answer += absolutes[index] : answer -= absolutes[index] 
    })
    return answer;
}