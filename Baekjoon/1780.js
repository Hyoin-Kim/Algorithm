//실버2 종이의 개수
var fs = require('fs');
var inputs = fs.readFileSync('/dev/stdin').toString().split('\n');

function solve(x,y,size){
    let paper = [2188][2188];
    let check = paper[x][y];

    for (let i=x;i<x+size;i++){
        for(let j=y;j<y+size;j++){
            if(paper[i][j] != paper[x][y]){
                solve(x, y, size / 3);
				solve(x + size * 1 / 3, y, size / 3);
				solve(x + size * 2 / 3, y, size / 3);
				solve(x, y + size * 1 / 3, size / 3);
				solve(x + size * 1 / 3, y + size * 1 / 3, size / 3);
				solve(x + size * 2 / 3, y + size * 1 / 3, size / 3);
				solve(x, y + size * 2 / 3, size / 3);
				solve(x + size * 1 / 3, y + size * 2 / 3, size / 3);
				solve(x + size * 2 / 3, y + size * 2 / 3, size / 3);
				return;
            }
        }
		solve(x, y + size * 2 / 3, size / 3);
        return;
    }
}

solve(0,0,N);