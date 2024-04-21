function solution(a, b, n) {
    let answer = 0;

    while(true) {
        if(n < a) {
            break;
        }
        n -= a;
        n += b;
        answer += b;
    }
    
    return answer;
}