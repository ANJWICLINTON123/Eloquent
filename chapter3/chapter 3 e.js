






//EXERCISE 2
/*function isEven(num1) {
    if (num1%10==0) {
        return true;
    }else{
        return false;
    }
}console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));*/



//EXERCISE 3
//MINIMUM
/*function min(a, b) {
    if (a>b) {
        return a;
    }else{
        return b;
    }
}
console.log(min(6, 9))*/

//RECURSION

/*function isEven(n) {
    if (n == 0) {
        return true;
    }
    else if(n == 1){
        return false;
    }
    else if (n<0) return isEven(-n);
    else return isEven(n-2);
}
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));*/



//BEAN COUNTING
/*function countchar(string, ch) {
    let counted= 0;
    for (let i = 0; i < string.length; i++) {
     if (string[i] == ch){
         counted += 1;
     }   
    }
    return counted;
}
function countBs(string) {
    return countchar(string, "B")
}
console.log(countBs("BBCBB"));
console.log(countchar("kakkerlak", "k"));*/
