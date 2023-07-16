function solution(numlist, n) {
    let answer = [];
    const lessN = numlist.filter((num) => num <= n).sort((a, b)=> b - a);
    const moreN = numlist.filter((num) => num > n).sort((a, b) => a - b);
    while(answer.length !== numlist.length) {
        if(n - lessN[0] < moreN[0] - n) {
            let temp = lessN.shift();
            answer.push(temp);
        } else if(n - lessN[0] > moreN[0] - n) {
            let temp = moreN.shift();
            answer.push(temp);
        } else {
            if(moreN.length !== 0) {
                let temp = moreN.shift();
                answer.push(temp);
            } else {
                let temp = lessN.shift();
                answer.push(temp);
            }
        }
    }
    return answer;
}