function solution(my_string, indices) {
    return my_string.split('').filter((str, index) => indices.includes(index) ?  '' : str).join('');
}