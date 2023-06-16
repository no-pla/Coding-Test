function solution(name, yearning, photo) {
    let answer = [];
    photo.forEach((pic) =>{
        let temp = 0;
        pic.forEach((person) => {
            if(name.findIndex(name => name === person) !== -1) {
                temp += yearning[name.findIndex(name => name === person)];
            }
        })
            answer.push(temp);
    })
    return answer;
}