//오픈채팅방 
function solution(record) {
    var answer = [];
    
    //1. 배열 생성
    var newArr = record.map(str=>str.split(" "));
    
    //2. uid와 nickName match 
    // ***Leave인 경우 undefined 고려하기 (예외처리!)
    var nickNameSet = {};
    for(var i=0; i<newArr.length; i++){
        if(newArr[i].length === 3 ){
             nickNameSet[newArr[i][1]] = newArr[i][2];
        }
    }
    
    //3. 출력하기
    for(var i=0; i<newArr.length; i++){
        if(newArr[i][0]==='Enter'){
            answer.push(nickNameSet[newArr[i][1]]+'님이 들어왔습니다.');
        } else if(newArr[i][0]==='Leave'){
            answer.push(nickNameSet[newArr[i][1]]+'님이 나갔습니다.');
        }
      }
    
    return answer;
}