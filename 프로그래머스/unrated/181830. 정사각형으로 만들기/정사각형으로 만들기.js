function solution(arr) {
    let answer = [];
    let maxLength = Math.max(arr.length, ...arr.map((array) => array.length));
    
    arr.map((array) => {
        if(array.length === maxLength) {
            answer.push(array)
        } else {
            let zeroArr = Array(maxLength - array.length).fill(0);
            answer.push(array.concat(zeroArr));
        }
    })
    while(answer.length !== maxLength) {
        let zeroArr = Array(maxLength).fill(0);
        answer.push(zeroArr);
    }
    return answer;
}