function solution(array, n) {
    let answer = 0;
    let min = Math.max(...array.filter(num => num <= n));
    let max = Math.min(...array.filter(num => num >= n));

    
    if(n - min === max - n) {
        answer = min;
    } else if(n - min > max - n) {
        answer = max;
    } else if(n - min< max - n) {
        answer = min;
    } else {
        answer = min ?? max;
    }
    return answer;
}