/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
var insert = function(intervals, newInterval) {
    intervals.push(newInterval);
    var res = [];
    var tmp = null;
    intervals.sort((x,y)=>x.start-y.start);
    for (var i = 0; i < intervals.length; i++) {
        if (res.length == 0) {
            tmp = intervals[i];
            res.push(tmp);
        } else if (tmp.end < intervals[i].start) {
            tmp = intervals[i];
            res.push(tmp);
        } else if (tmp.end <= intervals[i].end) {
            tmp.end = intervals[i].end;
        }
    }
    return res;
};
