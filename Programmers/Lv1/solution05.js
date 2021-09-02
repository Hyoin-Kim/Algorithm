//실패율 (카카오 블라인드 리크루팅)
function solution(N, stages) {
    var answer = [];
    let person = stages.length;
        for(let j=1;j<=N;j++){
            let count = stages.filter(N=>N===j).length;
            answer.push([j,count/person]);
            person = person-count;
        }
    answer = answer.sort((a,b)=> b[1]-a[1]);
    return answer.map(a=>a[0]);
}