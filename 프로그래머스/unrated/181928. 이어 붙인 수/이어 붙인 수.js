function solution(num_list) {
    const even = Number(num_list.filter((num) => num % 2 === 0).join(''));
    const odd = Number(num_list.filter((num) => num % 2 !== 0).join(''));
    return even + odd;
}