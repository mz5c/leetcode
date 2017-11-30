var str_pad_end = function(count, char) {
    var res = '';
    while (count) {
        res += char;
        count--;
    }
    return res;
}
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    //var a = {'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000};
    var res = '', left = 0, count = 0;
    count = parseInt(num / 1000);
    left = num % 1000;
    res = str_pad_end(count, 'M');
    if (left >= 900) {
        left -= 900;
        res += 'CM';
    } else if (left >= 500) {
        left -= 500;
        res += 'D';
        count = parseInt(left / 100);
        left %= 100;
        res += str_pad_end(count, 'C');
    } else if (left >= 400) {
        left -= 400;
        res += 'CD';
    } else {
        count = parseInt(left / 100);
        left %= 100;
        res += str_pad_end(count, 'C');
    }
    if (left >= 90) {
        left -= 90;
        res += 'XC';
    } else if (left >= 50) {
        left -= 50;
        res += 'L';
        count = parseInt(left / 10);
        left %= 10;
        res += str_pad_end(count, 'X');
    } else if (left >= 40) {
        left -= 40;
        res += 'XL';
    } else {
        count = parseInt(left / 10);
        left %= 10;
        res += str_pad_end(count, 'X');
    }
    if (left >= 9) {
        left -= 9;
        res += 'IX';
    } else if (left >= 5) {
        left -= 5;
        res += 'V';
        res += str_pad_end(left, 'I');
    } else if (left >= 4) {
        left -= 4;
        res += 'IV';
    } else {
        res += str_pad_end(left, 'I');
    }
    return res;
};

//other solution
var intToRoman = function(num) {
    var M = ["", "M", "MM", "MMM"];
    var C = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    var X = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    var I = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    return M[Math.floor(num/1000)] + C[Math.floor((num%1000)/100)] + X[Math.floor((num%100)/10)] +I[num%10];
};
