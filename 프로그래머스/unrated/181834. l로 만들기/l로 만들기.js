function solution(myString) {
    let regex = /[a-k]/g;
    return myString.replaceAll(regex, 'l');
}