var isValid = function(s) {
    var arr = [];
    for(var i = 0; i < s.length; i++) {
        if(s.charAt(i) == '(' || s.charAt(i) == '[' || s.charAt(i) == '{') { 
            arr.push(s.charAt(i));
        } else {
            var asciiTemp = s.charAt(i).charCodeAt() - arr.pop().charCodeAt();
            console.log(asciiTemp);
            if(asciiTemp !== 1 && asciiTemp !== 2) {
                return false;
            }
        }
    }

    if(arr.length == 0){
        return true;
    }else{
        return false;
    }
};

console.log(isValid("()"));

/*var a = '{';
var b = '}'
var ab = '()'

console.log(b.charCodeAt() - a.charCodeAt());
console.log(ab.charAt(1).charCodeAt() - ab.charAt(0).charCodeAt());
*/

/*var reverse = function(x) {
    
    if(x == 0 || x < -2147483648 || x > 2147483648) return 0;
    if(x == null) return null;

    console.log("hello");
    //deals with negatives
    var isNeg = false;
    if(x < 0) {
        isNeg = true;
        x *= -1;
    }

    //convert to string, then to array, and reverse
    x = x.toString().split('').reverse();

    //remove leading 0s
    while(x[0] == 0){
        x.shift();
    }

    //convert array to string, remove ',' and change to int
    x = parseInt(x.join().replace(/,/g,''));

    if(isNeg){
        x *= -1;
    }

    return x;
};

console.log(reverse(123));*/