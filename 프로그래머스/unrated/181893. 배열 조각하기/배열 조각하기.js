function solution(arr, query) {
    let answer = arr.slice();
    query.forEach((number, index) => {
        answer = index % 2 ? answer.slice(number) : answer.slice(0, number + 1);
    })
    return answer;
}