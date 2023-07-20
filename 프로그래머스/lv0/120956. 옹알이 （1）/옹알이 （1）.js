function solution(babbling) {
    let answer = 0;
    const available = ["aya", "ye", "woo", "ma"];

    babbling.map((babb, index) => {
        available.map((word, index) => {
            if(babb.includes(word)) {
                babb = babb.replace(word, ' ')
            }
        })
        if(babb.trim() === '') {
            answer++
        }
    })
    return answer;
}