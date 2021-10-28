//최댓값과 최솟값
function solution(s) {
    var answer = '';
    let sArray = s.toString().split(' ').map(item=>Number(item));
    //문자열을 배열로 구분
    let max = Math.max(...sArray);
    let min = Math.min(...sArray);
    answer = min + " " +max;
    return answer;
}