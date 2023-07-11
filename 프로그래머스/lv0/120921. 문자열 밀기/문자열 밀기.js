function solution(A, B) {
    let answer = -1;
    for(let i = A.length; i > 0; i--) {
        const changestr = A.slice(i) + A.slice(0, i);
        if(A.slice(i) + A.slice(0, i) === B) {
            answer = A.length - i;
            break;
        }
    }
    return answer;
}