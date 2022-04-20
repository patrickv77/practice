/*
Given two binary strings a and b, return their sum as a binary string.
*/

/*
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    if(a.length > b.length) {
        b.padStart(a.length, "0");
    }else{
        a.padStart(b.length, "0");
    }


};

var helper = function(x,y,carryover){
    
}


/*

*/