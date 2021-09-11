//내적
function solution(a, b) {
    var answer = 0;
    let mul = 0;
    for(let i=0;i<a.length;i++){
        mul=a[i]*b[i];
        answer+=mul;
    }
    return answer;
}