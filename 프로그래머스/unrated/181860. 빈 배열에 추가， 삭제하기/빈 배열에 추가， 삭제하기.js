function solution(arr, flag) {
    let answer = [];
    arr.forEach((num, index) => {
        if(flag[index]) {
            for(let i = 0; i < arr[index] * 2; i++) {
                answer.push(arr[index]);
            }
        } else {
            answer.splice(-arr[index]);
        }
    })
    return answer;
}