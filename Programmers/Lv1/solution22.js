//없는 숫자 더하기
function solution(numbers) {
    var answer = 45;
    let sum=0;
    for(let i=0;i<numbers.length;i++){
        for(let j=0;j<=9;j++){
            if(numbers[i]===j){
                sum+=numbers[i];
            }
        }
    }
    answer-=sum;
    return answer;
}