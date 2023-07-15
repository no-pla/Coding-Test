function solution(sizes) {
    let sortArr = sizes.map((size) => size.sort((a,b) => a - b));
    let row = Math.max(...sortArr.map((arr) => arr[0]));
    let col = Math.max(...sortArr.map((arr) => arr[1]));
    return row * col;
}