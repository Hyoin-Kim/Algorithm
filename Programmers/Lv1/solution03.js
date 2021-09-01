//3진법 뒤집기
function solution(n) {
    var answer = 0;
    let a = n.toString(3).split("").reverse().join("");
    answer = parseInt(a,3);
    return answer;
}