function solution(num_list) {
    return num_list.findIndex(num => num === num_list.filter(num => num < 0)[0]);
}