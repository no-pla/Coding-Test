function solution(arr, k) {
    let answer = Array.from(new Set(arr));
    if(answer.length < k) {
        return answer.concat(Array(k - answer.length).fill(-1))
    } else {
        return answer.slice(0, k);
    }
}