//수박수박수박수박수박수?
function solution(n) {
    var answer = '';
    for(let i=1;i<=n;i++){
        if(i%2===0){
            answer+="박";
        }else{
            answer+="수";
        }
    }
    return answer;
}