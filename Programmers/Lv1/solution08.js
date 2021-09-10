//예산
function solution(d, budget) {
    var answer = 0;
    let count = 0;
    let array = d.sort((a,b)=>a-b);
    for(let i =0;i<d.length;i++){
        answer +=d[i];
        if(answer <= budget){
            count++;
        }
    }
    return count;
}