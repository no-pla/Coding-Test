function solution(score) {
    let answer = [];
    let average = score.map((student) => (student[0] + student[1]) / 2);
    let sortAverage = average.slice().sort((a, b) => b - a);
    average.forEach((scores) => {
        let idx = sortAverage.findIndex(num => num === scores);
        answer.push(idx + 1)
    })
    return answer;
}