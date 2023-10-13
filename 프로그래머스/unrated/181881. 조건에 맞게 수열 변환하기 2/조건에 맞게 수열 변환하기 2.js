function solution(arr) {
    let answer = 0;
    let prev = arr;
    
    while(true) {
        let current = prev.map((elem) => {
        if(elem >= 50 && elem % 2 === 0) {
            return elem / 2
        } else if(elem < 50 && elem % 2 !== 0) {
            return elem * 2 + 1
        } else {
            return elem
        }
    })
        if(String(prev) === String(current)) {
            break;
        }
        
        prev = current
        answer++
    }
    return answer;
}