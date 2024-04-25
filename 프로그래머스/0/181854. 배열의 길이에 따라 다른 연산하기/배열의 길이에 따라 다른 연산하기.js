function solution(arr, n) {
    return arr.length % 2 ? arr.map((num, index) => index % 2 === 0 ? num + n : num) : arr.map((num, index) => index % 2 !== 0 ? num + n : num);
}