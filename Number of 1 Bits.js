/**
 * @param {number} n - a positive integer
 * @return {number}
 */
 //我只能說js真的太變態了。還在想怎麼之前第一道題按照公式做一直是錯得，
 //原來js所有的var都按照浮點數處理，所以直接用除號它是會得出小數的答案。所以這裡
 //必須得進行類型轉換
var hammingWeight = function(n) {
    var i = 1;
    if ( n === 0 || n ===1) {
        return n;
    }
    while ( n >1 ) {
        if (n % 2 === 1) {
            i = i + 1;
        }
        n = parseInt(n/2);
    }
    return i;
};