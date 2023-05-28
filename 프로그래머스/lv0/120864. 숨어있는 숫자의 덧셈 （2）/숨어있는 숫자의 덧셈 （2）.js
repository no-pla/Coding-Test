function solution(my_string) {
    const regExp = /[a-zA-Z]/g;
    return my_string.replaceAll(regExp, ' ').split(' ').filter((num) => num !== '').reduce((cur, acc) => +cur + +acc, 0);
}