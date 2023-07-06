function solution(arr) {
    let powTwo = [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024];
    if(arr.length === 1) return arr;
    if(powTwo.includes(arr.length)) {
        return arr;
    } else {
        let zeroArr = Array(powTwo.filter((pow) => pow > arr.length)[0] - arr.length).fill(0);
        return arr.concat(zeroArr)
    }
}