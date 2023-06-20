function solution(s) {
    let arr = s.split(' ').map((str) => +str);
    return `${Math.min(...arr)} ${Math.max(...arr)}`;
}