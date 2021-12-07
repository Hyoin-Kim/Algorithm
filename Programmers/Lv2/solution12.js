//구명보트
function solution(people, limit) {
    var answer = 0;
    people.sort((a,b)=>b-a);
    for(let i=0,j=people.length-1;i<=j;i++){
        if(people[i]<=limit){
            if(people[i]+people[j]>limit){
                answer++;
            }else{
                answer++;
                j--;
            }
        }
        answer;
    }
    return answer;
}