//자연수 뒤집어 배열로 만들기
function solution(n) {
    var answer = [];
    let a = n.toString().split('').reverse().map(a=>parseInt(a));
    return a;
}