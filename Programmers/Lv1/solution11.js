//부족한 금액 계산하기
function solution(price, money, count) {
    var answer = -1;
    let sum = 0;
    for(let i=1;i<=count;i++){
        sum+=price*i;
    }
    if(money>=sum){
        return 0;
    }else if(money<sum){
        answer = sum-money;
    }
    return answer;
}