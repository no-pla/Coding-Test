function solution(arr, n) {
    let answer = [];
    if(arr.length % 2) {
        arr.map((number, index) => {
            if(index % 2 === 0) answer.push(number + n)
            else answer.push(number)
        })
    } else {
        arr.map((number, index) => {
            if(index % 2) answer.push(number + n)
            else answer.push(number)
        })
    }
    return answer;
}