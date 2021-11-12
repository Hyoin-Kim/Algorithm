//최소직사각형
function solution(sizes) {
    var answer = 0;
    let xmax=0;
    let ymax=0;
    for(let i=0;i<sizes.length;i++){
        sizes[i].sort((a,b)=>a-b);
        if(sizes[i][0]>xmax){
            xmax=sizes[i][0];
        }
        if(sizes[i][1]>ymax){
            ymax=sizes[i][1];
        }
    }
    
    return xmax*ymax;
}