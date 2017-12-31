/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    citations = citations.sort((x,y)=>x-y);
    var len = citations.length;
    for (var i = 0; i < len; i++) {
        if (citations[i] >= len - i) {
            return len - i;
        }
    }
    return 0;
};
