function solution(picture, k) {
    let answer = [];
    picture.map((pic) => {
        let temp = [];
        pic.split('').map((char) => {
            temp.push(char.repeat(k));
        })
        for(let i = 0; i < k; i++) {
            answer.push(temp.join(''));
        }
    })
    return answer;
}