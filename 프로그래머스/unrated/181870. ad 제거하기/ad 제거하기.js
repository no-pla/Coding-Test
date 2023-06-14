function solution(strArr) {
    let answer = [];
    strArr.forEach((str, index) => {
        if(!str.includes('ad')) answer.push(str)
    })
    return answer;
}