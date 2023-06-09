function solution(numbers) {
    let answer = 0;
    const num = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

    answer = +num.reduce((acc, number, index) => {
        return acc.replaceAll(number, String(index));
    }, numbers)

    return answer;
 }