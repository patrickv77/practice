const data = require('./users.json');
//console.log(data[0].maps['north vern']);

//this would be inputted data
let region = 'north vern';
let mapColor = 'blue';
let players = [];

for(let i = 0; i < data.length; i++) {
    if(data[i].maps[region][mapColor] >= 1){
        let temp = [data[i].name, data[i].maps[region][mapColor]];
        players.push(temp);
    }
}

//let players = [[data[0].name, data[0].maps['north vern'].blue],[data[1].name, data[1].maps['north vern'].blue],[data[2].name, data[2].maps['north vern'].blue]];


function playerSort(arr){
    return arr.sort((a,b) => {
        return b[1] - a[1];
    });
}


console.log(playerSort(players));

/*
takes a list of players [[playerName, numMaps], etc]
returns [[[playerA,B,C,D],numRuns], etc]
*/
function makeGroups(players) {
    let size = players.length;
    if(size < 4) { 
        return "you cant do any rotations silly";
    }
    let res = [];
    while(size >= 4) {
        let temp = [players[3][1]];
        let names = [];

        let spliceIndex = 3;
        let spliceCount = 0;
        for(let i = 0; i < 4; i++){
            names.push(players[i][0]);
            let zeroCheck = players[i][1] - players[3][1];
            if(zeroCheck === 0) {
                if(i < spliceIndex){
                    spliceIndex = i;
                }
                spliceCount++;
            }
            players[i][1] = zeroCheck;
        }

        temp = [names, ...temp];
        res.push(temp);

        players.splice(spliceIndex,spliceCount);
        size = players.length;
        playerSort(players);
    }
    return res;
}

console.log(makeGroups(players));