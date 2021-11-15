//실버1 단지번호붙이기
function solution(){
    let array = [];

    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            if(graph[i][j]===1){
                dfs(i,j);
                //dfs가 수행하고 나면 하나의 단지 전체 방문처리 완료
                array.push(home);
                home =0;
            }
        }
    }
    console.log(array.length);
    array.sort((a,b)=>a-b);
    array.map((el)=>console.log(el));
};

const dfs = (i,j,a) => {
    if(Rangecheck(i,j) && graph[i][j] ===1){
        graph[i][j] = 0;
        home += 1;
        for(let z =0;z<dx.length;z++){
            dfs(i + dx[z],j+dy[z]);
        }
    }
};

function Rangecheck(i,j){
    if(i>=0 && i<n && j>=0 && j<n){
        return true;
    }
    else return false;
}

const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

let input =[];
let graph =[];
let n =0;
let home =0; //단지별 아파트 개수
let dx =[1,-1,0,0];
let dy =[0,0,1,-1];
rl.on("line",function (line){
    input.push(line);
}).on("close",function(){
    n=input.shift();
    graph = Array.from(Array(n),()=>new Array(n));

    for(let i=0;i<n;i++){
        graph[i] = input[i].split("").map((el)=>Number(el));
    }
    solution();
    process.exit();
});