function solution(arr) {
    let answer;
    let first = arr.findIndex((element) => element === 2);
    let last = arr.slice().reverse().findIndex((element) => element === 2);
    if(first === -1 && last === -1) {
        answer = [-1];
    } else {
        answer = arr.slice(first, arr.length - last);
    }
    return answer;
}