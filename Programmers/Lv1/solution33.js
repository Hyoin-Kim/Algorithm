//크레인 인형뽑기 게임

function solution(board, moves) {
    var answer = 0;
    let array=[];
    
    for(let i=0;i<moves.length;i++){
        const move = moves[i]-1;
        for(let j=0;j<board.length;j++){
            const doll = board[j][move];
            if(doll){
                board[j][move] = 0;
                if(array.length !==0 && array[array.length-1]===doll){
                    array.pop();
                    answer+=2;
                }else{
                    array.push(doll);
                }
                break;
            }
        }
    }
    return answer;
}