function solution(n) {
    if(n < 2) return n;
    const getFibonacci = (num) => {
        let fibonacci = [0, 1];
        for(let i = 0; i < num - 1; i++) {
            fibonacci.push((fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]) % 1234567);
        }
        return fibonacci[fibonacci.length - 1];
    }
    return getFibonacci(n);
}