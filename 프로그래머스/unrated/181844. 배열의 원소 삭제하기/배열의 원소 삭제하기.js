function solution(arr, delete_list) {
    return arr.filter((number) => !delete_list.includes(number));
}