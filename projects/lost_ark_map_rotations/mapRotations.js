/*
In Lost Ark, people often do "Map Rotations" (MR)

You can only do MR with a party of 4 and each person has to have the same rarity (BLUE, PURPLE, GOLD) map from the same region (North Vern, Rohendel, Yorn, Feiton, Punika, South Vern)

I.E. if 4 people (A, B, C, D) each have at least 1 blue map from north vern, they can form a party. This will use one blue map from north vern from each party member.

Store values in an object:
{
    name: A
    maps: {
        north vern: {
            blue:
            purple:
            gold:
        },
        rohendel: {
            blue:
            purple:
            gold:
        },
        yorn: {
            blue:
            purple:
            gold:
        },
        feiton: {
            blue:
            purple:
            gold:
        },
        punika: {
            blue:
            purple:
            gold:
        },
        south vern: {
            blue:
            purple:
            gold:
        }
    }
    equalize: yes or no
}

//need a function to take region and map color as inputs and return [{[A,B,C,D], numRuns}, {} etc] groups
//while making groups, decrement map count if used and delete people who have 0 maps
function makeGroups(region, mapColor){
    return [{[A,B,C,D], numRuns}, {} etc]
}

//need a function that takes the users, region and map and returns an array [{name, number of maps},{},{}] sorted from most maps of that region/color to least maps of that region/color
function sort(users, region, map){
    return [{name, numMaps},{}]
}

//function that reads data based on region and map color and returns an array => [['player name', numMaps]], where it only grabs players with numMaps > 0



*/

/*
api key= AIzaSyAJ_opGe6kP1XBZSIwisLurLWAWJd5kX6g;
*/