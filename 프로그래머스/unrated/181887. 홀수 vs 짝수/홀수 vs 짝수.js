function solution(num_list) {
    let odd = num_list.filter((num, index) => (index + 1) % 2).reduce((cur, acc) => cur + acc)
    let even = num_list.filter((num, index) => (index + 1) % 2 === 0).reduce((cur, acc) => cur + acc)
    return Math.max(odd, even);
}