//기능개발
function solution(progresses, speeds) {
    var answer = [0];
    let days = [];
    for(let i=0;i<progresses.length;i++){
        days.push(Math.ceil((100-progresses[i])/speeds[i]));
    }
    let maxDay=days[0];
    for(let j=0,k=0;j<days.length;j++){
        if(maxDay>=days[j]){
            answer[k]+=1;
        }else{
            maxDay=days[j];
            answer[++k]=1;
        }
    }
    return answer;
}