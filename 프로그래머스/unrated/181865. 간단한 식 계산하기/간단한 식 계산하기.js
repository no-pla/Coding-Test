function solution(binomial) {
    let answer = 0;
    switch(binomial.split(' ')[1]) {
        case '+':
            answer = +binomial.split(' ')[0] + +binomial.split(' ')[2];
            break;
        case '-':
            answer = +binomial.split(' ')[0] - +binomial.split(' ')[2];
            break;
        case '*':
            answer = +binomial.split(' ')[0] * +binomial.split(' ')[2];
            break;
    }
    return answer;
}