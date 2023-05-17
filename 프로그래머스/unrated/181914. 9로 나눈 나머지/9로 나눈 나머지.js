function solution(number) {
    return number.split('').reduce((cur, acc) => +cur + +acc ) % 9;
}