function solution(s) {
    let answer = [];
    s.split(' ').map((word) => {
        let temp = '';
        word.split('').findIndex((al, index) => {
            if(index % 2) temp += al.toLowerCase()
            else temp += al.toUpperCase()
        })
        answer.push(temp);
    })
    return answer.join(' ');
}
