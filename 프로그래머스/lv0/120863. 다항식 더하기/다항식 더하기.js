function solution(polynomial) {
    let xCount = 0;
    let numberCount = 0;
    polynomial.split(' + ').forEach((x) => {
        if(isNaN(+x)) {
            x.length > 1 ? xCount += +x.slice(0, x.length - 1) : xCount += 1;
        } else {
            numberCount += +x;
        }
    })
    let x = xCount > 0 ? `${xCount.toString() > 1 ? xCount.toString() : ''}x` : '';
    let number = numberCount ? `${numberCount}` : '';
    let answer= `${x}${xCount && number ? ' + ' : ''}${number}`;
    return answer;
}