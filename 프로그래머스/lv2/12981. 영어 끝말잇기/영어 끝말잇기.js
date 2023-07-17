function solution(n, words) {
    let answer = [0, 0];
    for(let i = 1; i < words.length; i++) {
        let end = words[i - 1].slice(-1); // 마지막 글자 가져오기
        let start = words[i].startsWith(end); // 첫번째 글자 마지막 글자 같은지 확인
        let duplicate = words.filter((word) => word === words[i]); // 같은 단어 개수 확인
        let firstIndex = words.findIndex((word) => word === duplicate[0]); // 같은 단어 첫번째 위치
        if(!start || (duplicate.length > 1 && i !== firstIndex)) {
            answer[0] += i % n + 1;
            answer[1] += Math.ceil((i + 1) / n);
            break;
        }
    }
    return answer;
}