function solution(arr1, arr2) {
    let answer = 0;
    if(arr1.length === arr2.length) {
       if(arr1.reduce((cur, acc) => cur + acc) === arr2.reduce((cur, acc) => cur + acc)) return answer = 0;
       answer = arr1.reduce((cur, acc) => cur + acc) > arr2.reduce((cur, acc) => cur + acc, 0) ? 1 : -1;
    } else {
        answer = arr1.length > arr2.length ? 1 : -1;
    }
    return answer;
}