function solution(myString) {
    let answer = [];
    myString.split('x').forEach((str) => answer.push(str.length))
    return answer;
}