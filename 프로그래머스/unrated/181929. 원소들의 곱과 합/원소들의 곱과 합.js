function solution(num_list) {
    return Math.pow(num_list.reduce((cur, acc) => cur + acc), 2) > num_list.reduce((cur, acc) => cur * acc) ? 1 : 0;
}