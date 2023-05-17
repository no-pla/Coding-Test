function solution(todo_list, finished) {
    let answer = [];
    finished.forEach((todo, index) => {
        console.log(todo === false)
        if(!todo) {
            answer.push(todo_list[index])
        }
    })
    return answer;
}