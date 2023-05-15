function solution(numbers, n) {
    var answer = 0;
    numbers.forEach((number, index) => {
        if(answer > n) return;
        answer += numbers[index]
    })
    return answer;
}