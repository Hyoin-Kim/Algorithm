//콜라츠 추측
function solution(num) {
    for(let i=1;i<=500;i++){
        if(num%2===0){
            num=num/2;
            if(num===1){
                return i;
            }
        }else if(num%2===1){
            num=num*3+1;
            if(num===1){
                return i;
            }
        }
    }
    return -1;
}