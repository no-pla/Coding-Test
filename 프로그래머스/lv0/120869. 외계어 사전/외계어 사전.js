function solution(spell, dic) {
    let answer;
    answer = dic.map((word) => {
      return word.split('').sort().join('') === spell.sort().join('') ? 1 : 2; 
    })
    return answer.includes(1) ? 1 : 2;
}