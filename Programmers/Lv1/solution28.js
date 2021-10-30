//k번째수
function solution(array, commands) {
    var answer = [];
    let a=0;
    let b=0;
    let c=0;
    for(let i=0;i<commands.length;i++){
        a = commands[i][0];
        b = commands[i][1];
        c = commands[i][2];
        let sliced= array.slice(a-1,b);
        let sorted= sliced.sort((a,b)=>a-b);
        answer.push(sorted[c-1]);
    }
    return answer;
}