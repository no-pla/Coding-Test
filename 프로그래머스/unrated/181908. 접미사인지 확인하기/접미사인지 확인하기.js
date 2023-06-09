function solution(my_string, is_suffix) {
    let suffix = my_string.slice(my_string.length - is_suffix.length, my_string.length);
    return suffix === is_suffix ? 1 : 0;
}