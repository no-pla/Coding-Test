function solution(order) {
    let answer = 0;
    order.forEach((coffee) => coffee.includes('cafelatte') ? answer += 5000 : answer += 4500)
    return answer;
}