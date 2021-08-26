//124 나라의 숫자
function solution(n) {
    var answer = '';
    let arr= ['4','1','2'];
    while(n>0){
    answer=(arr[n%3])+answer;
    n=Math.floor((n-1)/3);
    }
    return answer;
}