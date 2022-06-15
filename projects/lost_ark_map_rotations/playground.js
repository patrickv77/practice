const data = require('./users.json');
//console.log(data[0].maps['north vern']);

//this would be inputted data
let region = 'north vern';
let color = 'blue';

function readCheckedBoxes() {
    const btn = document.querySelector('#btn-players');
    btn.addEventListener('click', (event) => {
        let checkboxes = document.querySelectorAll('input[name="available players"]:checked');
        let values = [];
        checkboxes.forEach((checkbox) =>{
            values.push(checkbox.value);
        });
    });
    return values;
}

//once the function is working, uncomment
//let avail = readCheckedBoxes();

//takes region and color and returns an array of players = [[data[0].name, data[0].maps['north vern'].blue],[data[1].name, data[1].maps['north vern'].blue],[data[2].name, data[2].maps['north vern'].blue]]etc
function playersWithMap(mapRegion, mapColor) {
    let res = [];

    for(let i = 0; i < data.length; i++) {
        if(data[i].maps[mapRegion][mapColor] >= 1){
            let temp = [data[i].name, data[i].maps[mapRegion][mapColor]];
            res.push(temp);
        }
    }

    return res;
}

let players = playersWithMap(region,color);

//takes the players with map array and trims it based on players that are available
//players here array will be populated by checkboxes on the website, aka click checkboxes for players available at the moment and generate a new array based on that information
function playersAvailable(playersHere, totalPlayers) {
    let res = [];

    for(let i = 0; i < totalPlayers.length; i++) {
        let playerIndex = playersHere.indexOf(totalPlayers[i][0]);
        if(playerIndex != -1) {
            res = [...res, totalPlayers[i]];
        }
    }

    return res;
}

//comment out once html file works
let avail = ['denise', 'patrick', 'jason', 'kishan'];
players = playersAvailable(avail,players);

function playerSort(arr){
    return arr.sort((a,b) => {
        return b[1] - a[1];
    });
}

playerSort(players);
console.log(players);

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