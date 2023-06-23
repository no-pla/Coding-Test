function solution(str_list) {
    let answer;
    let lIndex = str_list.findIndex((str) => str === 'l');
    let rIndex = str_list.findIndex((str) => str === 'r');
    if(lIndex === -1 && rIndex === -1) {
        answer = [];
    } else {
        answer = (lIndex === -1 ? 21 : lIndex) < (rIndex === -1 ? 21 : rIndex) ? str_list.slice(0, lIndex) : str_list.slice(rIndex + 1);
    }
    return answer;
}