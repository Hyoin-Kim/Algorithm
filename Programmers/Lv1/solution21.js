//자릿수 더하기
function solution(n)
{
    var answer = n.toString();
    let a = answer.split('');
    let sum = 0;
    for(let i=0;i<a.length;i++){
        sum+=parseInt(a[i]);
    }

    return sum;
}