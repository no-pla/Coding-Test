function solution(n) {
    const answer = Array.from(Array(n), () => Array(n).fill(0))
    let temp = 0; // 방향 전환 좌표
    let step = "RIGHT"; // 방향 전환용
    let range = [[temp, temp], [temp, n - 1 - temp], [n - 1 - temp, n - 1 - temp], [n - 1 - temp, temp]];
    let num = 1;

    while (true) {
        if (step === "RIGHT") {
            // 왼쪽 위 => 오른쪽 위로 이동
            for (let i = range[0][1]; i < range[1][1]; i++) {
                answer[range[0][0]][i] = num;
                num += 1;
            }
            step = "DOWN";
        } else if (step === "DOWN") {
            // 오른쪽 위 => 오른쪽 아래로 이동
            for(let i = range[1][0]; i < range[2][0]; i++) {
                answer[i][range[1][1]] = num;
                num += 1;
            }
            step = "LEFT";
        } else if (step === "LEFT") {
            // 오른쪽 아래 => 왼쪽 아래로 이동
            for(let i = range[2][1]; i > range[3][1]; i--) {
                answer[range[2][1]][i] = num;
                num += 1;
            }
            step = "UP"
        } else if (step === "UP") {

            let last = range[3].slice()
            let check = range[0][0];
            temp++;
            range = [[temp, check === 0 ? 0 : temp - 1], [temp, n - 1 - temp], [n - 1 - temp, n - 1 - temp], [n - 1 - temp, temp]];
            for(let i = last[0]; i > range[0][0]; i--) {
                answer[i][range[0][1]] = num;
                num += 1;
            }
            step = "RIGHT"
        }
        
        if(num >= Math.pow(n, 2)) {
            for(i = 0; i < n; i++) {
                for(j = 0; j < n; j++) {
                    if(answer[i][j] === 0) {
                        answer[i][j] = Math.pow(n, 2)
                        break;
                    }
                }
                if(answer[i][j] === Math.pow(n, 2)) {
                    break;
                }
            }
            break;
        }
  }

  return answer;
}