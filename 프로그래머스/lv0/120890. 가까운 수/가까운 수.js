function solution(array, n) {
    let answer = 0;
    let min = array.filter(num => num <= n).sort((a, b) => a - b);
    let max = array.filter(num => num >= n).sort((a, b) => a - b);

    if(n - min[min.length - 1] === max[0] - n) {
        answer = min[min.length - 1];
    } else if(n - min[min.length - 1] > max[0] - n) {
        answer = max[0];
    } else if(n - min[min.length - 1] < max[0] - n) {
        answer = min[min.length - 1];
    } else {
        answer = min[min.length - 1] ?? max[0];
    }
    return answer;
}