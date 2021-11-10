//큰 수 만들기
function solution(number, k) {
    let array=[];
    for(let i=0;i<number.length;i++){
        let el = number[i];
        while(k>0&&array[array.length-1]<el){
            array.pop();
            k--;
        }
            array.push(el);
    }
    
    array.splice(array.length - k, k);
    var answer = array.join('');
    return answer;
}