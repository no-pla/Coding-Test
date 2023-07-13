function solution(a, b, c, d) {
    let answer;
    let arr = [a, b, c, d];
    let setArr = new Set(arr);

    if(a === b && b === c && c === d && d === a) {
        answer = a * 1111;
    } else if(setArr.size === 4) {
        answer = Math.min(a, b, c, d);
    } else if(setArr.size === 3) {
        let temp = 1;
        for(let num of setArr) {
            if(arr.filter((number) => number === num).length !== 2) {
                temp *= num;
            }
        }
        answer = temp;
    } else {
        if(arr.filter((number) => number === a).length === 2) {
            let [p, q] = Array(...setArr);
            answer = (p + q) * Math.abs(p - q);
        } else {
            let temp = 0;
            for(let num of setArr) {
                if(arr.filter((number) => number === num).length === 3) {
                    temp += num * 10;
                } else {
                    temp += num;
                }
            }
            answer = Math.pow(temp, 2)
        }

    }
    return answer;
}