//문자열 다루기 기본
function solution(s) {
    if((s.length === 4||s.length ===6) && !isNaN(s)){
        return true;
    }else{
        return false;
    }
}