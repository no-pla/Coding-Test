function solution(arr) {
    let answer;
    let first = arr.indexOf(2);
    let last = arr.lastIndexOf(2);
    if(first === -1 && last === -1) {
        answer = [-1];
    } else {
        answer = arr.slice(first, last + 1);
    }
    return answer;
}