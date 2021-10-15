//문자열 내 p와 y의 개수

function solution(s){
    var answer = s.split("");
    let pSum=0;
    let ySum=0;
    for(let i =0;i<s.length;i++){
        if(answer[i]==="p" || answer[i]==="P"){
            pSum++;
        }else if(answer[i]==="y" ||answer[i]==="Y" ){
            ySum++;
        }
    }
    
    if(pSum===ySum){
        return true;
    }else {
        return false;
    }

}