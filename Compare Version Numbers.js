/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    var v1 = version1.split(".");
    var v2 = version2.split(".");

    var length = Math.max(v1.length, v2.length);
    
    for (var i=0; i<length; i++) {
        var ver1 = i<v1.length? parseInt(v1[i],10): 0;
        var ver2 = i<v2.length? parseInt(v2[i],10): 0;
        
        if(ver1> ver2) return 1;
        if(ver1 < ver2) return -1;
    }
    return 0;
};