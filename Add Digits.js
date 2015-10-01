/**
 * @param {number} num
 * @return {number}
 */
 //这道题真的巨坑爹，要特么知道公式才能做。谷歌上有关于digital root的公式
var addDigits = function(num) {
    if (num === 0) {
        return 0;
    }
    else {
        return (num - 1) % 9 + 1;
    }
};
