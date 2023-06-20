function solution(s) {
    let answer = [];
    s.split(' ').map((str) => {
        if(str !== '') {
            answer.push(str[0].toUpperCase() + str.slice(1).toLowerCase());
        } else {
            answer.push('')
        }
    })
    return answer.join(' ');
}