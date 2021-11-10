//체육복
function solution(n, lost, reserve) {
    var answer = 0;
    let array = [];
    for(let i=0;i<=n;i++){
        array.push(1);
    }
    for(let i=0;i<=n;i++){
        for(let j=0;j<lost.length;j++){
            if(i===lost[j]){
                array[i]=0;
            }
        }
        for(let j=0;j<reserve.length;j++){
            if(i===reserve[j]){
                array[i]+=1;
            }
        }
    }
    
    for(let k=0;k<array.length;k++){
        if(array[k]===0 &&array[k-1]===2){
            array[k]=1;
            array[k-1]=1;
        }else if(array[k]===0 &&array[k+1]===2){
            array[k]=1;
            array[k+1]=1;
        }
    }
    
    for(var i =1;i<=n;i++){
        if(array[i]>0) answer++;
    }
    
    return answer;
}