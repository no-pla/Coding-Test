function solution(strArr) {
    var answer = [];
    strArr.forEach((str, index) => {
        index % 2 === 0 ? answer.push(str.toLowerCase()) : answer.push(str.toUpperCase())
    })
    return answer;
}