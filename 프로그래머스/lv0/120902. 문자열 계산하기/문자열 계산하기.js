function solution(my_string) {
    let strArr = my_string.split(' ');
    let answer = +strArr[0];
    for(let i = 1; i < strArr.length; i += 2) {
        strArr[i] === '+' ? answer += +strArr[i + 1] : answer -= +strArr[i + 1];
    }
    return answer;
}