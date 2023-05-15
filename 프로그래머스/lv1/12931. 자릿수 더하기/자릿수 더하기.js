function solution(n)
{
    return Number(String(n).split('').reduce((cur, acc) => +cur + +acc))
}