function solution(quiz) {
    let answer = [];
    quiz.forEach((math)=> {
        let mathArr = math.split(' ');
        let result = mathArr.includes('+') ? Number(mathArr[0]) + Number(mathArr[2]) : Number(mathArr[0]) - Number(mathArr[2]);
        return result === Number(mathArr[4]) ? answer.push('O') : answer.push('X');
    })
    return answer;
}