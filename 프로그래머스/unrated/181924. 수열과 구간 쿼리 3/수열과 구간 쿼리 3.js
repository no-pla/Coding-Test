function solution(arr, queries) {
    queries.forEach((query) => {
        let i = arr[query[0]];
        let j = arr[query[1]];
        arr[query[0]] = j;
        arr[query[1]] = i;
    })
    return arr;
}