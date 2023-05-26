function solution(s) {
    let answer = 0;
    const sArr = s.split(' ');
    for(let i = 0; i < sArr.length; i++) {
        if(sArr[i] === 'Z') {
            answer -= Number(sArr[i - 1]);
        } else {
            answer += Number(sArr[i]);      
        }
    }
    return answer;
}