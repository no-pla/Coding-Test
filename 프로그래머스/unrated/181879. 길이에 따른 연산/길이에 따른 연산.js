function solution(num_list) {
    if(num_list.length >= 11) {
        return num_list.reduce((cur, acc) => cur + acc)
    } else {
        return num_list.reduce((cur, acc) => cur * acc)
    }
}