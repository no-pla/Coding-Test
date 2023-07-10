function solution(rank, attendance) {
    let [a, b, c] = rank.slice().filter((student, index) => attendance[index]).sort((a, b) => a - b);
    return rank.findIndex(num => num == a) * 10000 + rank.findIndex(num => num == b) * 100 + rank.findIndex(num => num == c);
}