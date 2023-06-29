function solution(strArr) {
    let answer = 0;
    for(let i = 1; i <= 30; i++) {
        if(strArr.filter(string => string.length === i).length > answer) {
            answer = strArr.filter(string => string.length === i).length;
        }
    }
    
    return answer;
}