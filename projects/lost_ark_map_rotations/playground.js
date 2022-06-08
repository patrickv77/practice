const data = require('./users.json');
//console.log(data[0].maps['north vern']);

//this would be inputted data
let region = 'north vern';
let mapColor = 'blue';
let players = [];

for(let i = 0; i < data.length; i++) {
    let temp = [data[i].name, data[i].maps[region][mapColor]];
    players.push(temp);
}

//let players = [[data[0].name, data[0].maps['north vern'].blue],[data[1].name, data[1].maps['north vern'].blue],[data[2].name, data[2].maps['north vern'].blue]];

players.sort((a,b) => {
    return b[1] - a[1];
});

console.log(players);

