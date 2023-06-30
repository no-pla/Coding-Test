function solution(A,B){
    let answer = 0;
    const arrA = A.sort((a, b) => a - b);
    const arrB = B.sort((a, b) => b - a);
    
    arrA.forEach((number, index) => {
        answer += number * arrB[index]
    })
    
    return answer;
}