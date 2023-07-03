function solution(board, k) {
    let answer = 0;
    board.forEach((arr, indexI) => {
        arr.forEach((array, indexJ) => {
            if(indexI + indexJ <= k) {
                answer += board[indexI][indexJ];
            }
        })
    })
    return answer;
}