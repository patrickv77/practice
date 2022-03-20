var reverse = function(x) {
    
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

console.log(reverse(123));