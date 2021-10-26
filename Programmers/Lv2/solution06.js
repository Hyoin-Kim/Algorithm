//올바른 괄호
function solution(s){
    var answer = true;
    let acount=0;
    let bcount=0;
    for(let i=0;i<s.length;i++){
        if(s[i]===')'){
            acount++;
        }else if(s[i]==='('){
            bcount++;
        }   
    }
    if(acount===bcount){
        if(s[s.length-1]===')'){
            return answer;
        }else return false;
    }else 
    return false;
}

function solution(s){
    let answer = true;
    let arrS = [...s];// spread를 사용해서 s를 배열에 하나씩 나눔
    let left = 0; // "("을  위한 변수
    
    if(arrS[0] === ')') return false; // 1번째 문자가 ")"이면 false를 반환
    
    for(let i = 0; i < arrS.length; i++){
        if(arrS[i]==='('){
            left++; //"("이면 left 1 증가  
        }else if(left >= 1 && arrS[i] === ')'){
            left--; // left가 1 이상이고 arrS[i]가 ')' 이면 left 감소
        }
    }
    if(left === 0){
        return true; //left가 0이면 true
    }else{
        return false; // 0이 아니면 false
    }
 
}