//베스트앨범
function solution(genres, plays){
    
    // 장르별 카운팅
    let play = {};
    for(let i=0; i<genres.length; i++){
        play[genres[i]] = (!play[genres[i]]) ? plays[i] : play[genres[i]] + plays[i];
    }
    
    // 장르 순서만
    let order = [];
    play = Object.entries(play).sort((a,b)=>b[1]-a[1]);
    for(let i in play){
        order.push(play[i][0]);
    }
    console.log(order);
    
    // 고유 순서 찾기
    var answer = [];
    for(let k=0; k<order.length; k++){
        let gen = order[k];
        let stack = {};
        for(let i=0; i<genres.length; i++){
            if(genres[i] == gen){
                stack[i] = plays[i];
            }
        }
        stack = Object.entries(stack).sort((a,b)=>b[1]-a[1]);
        console.log(stack);
        let cnt = 0;
        for(let j in stack){
            cnt++;
            if(cnt>2) break;
            answer.push(parseInt(stack[j][0]));
        }
    }
    console.log(answer);
    
    return answer;
}