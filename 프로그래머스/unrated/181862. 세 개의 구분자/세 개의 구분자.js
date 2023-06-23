function solution(myStr) {
    let answer = myStr.replaceAll('a', ' ').replaceAll('b', ' ').replaceAll('c', ' ').split(' ').filter((str) => str !== '');
    return answer.length ? answer : ['EMPTY'];
}