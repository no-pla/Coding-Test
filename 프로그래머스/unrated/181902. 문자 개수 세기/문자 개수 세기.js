function solution(my_string) {
    let answer = [];
    for(let i = 65; i <= 122; i++) {
        if(i > 90 && i < 97 ) continue;
        answer.push(my_string.split('').filter((string) => string === String.fromCharCode(i)).length);
    }
    return answer;
}