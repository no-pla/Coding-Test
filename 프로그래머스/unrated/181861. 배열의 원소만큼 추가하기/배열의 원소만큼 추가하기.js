function solution(arr) {
    let answer = [];
    for(let i = 0; i < arr.length; i++) {
        let temp = Array(arr[i]).fill(arr[i])
        answer.push(...temp)
    }
    return answer;
}