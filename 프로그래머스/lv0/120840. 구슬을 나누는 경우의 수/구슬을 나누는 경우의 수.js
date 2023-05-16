function solution(balls, share) {
    let answer;
    
    const fac = (start, target) => {
        let temp = 1;
        for(let i = start; i <= target; i++) {
            temp *= i;
        }
        return temp;
    }
    
    let ballsFac = fac(share + 1, balls); // balls와 share를 미리 나누기
    let divideBallFac = fac(2, balls - share); // (n-m)!

    console.log(ballsFac/divideBallFac)
    
    if(balls === share) {
        answer = 1;
    } else {
        answer = Math.floor(ballsFac / divideBallFac)
    }
    
    return answer;
}