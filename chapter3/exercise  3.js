



//BEAN COUNTING
function countchar(string, ch) {
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
console.log(countchar("kakkerlak", "k"));
