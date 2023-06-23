function solution(q, r, code) {
    let answer = '';
    console.log(code.split('').forEach((str, index) => {
        if(index % q === r) answer += str;
    }))
    return answer;
}