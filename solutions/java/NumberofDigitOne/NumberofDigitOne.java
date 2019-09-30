class Solution {
    public int countDigitOne(int n) {
        int cur=1, q=n, res=0, pos;
        while (q>0){
            pos = q%10;
            q /= 10;
            res += q*cur;
            if (pos==1) res += n%cur+1;
            else if (pos>1) res += cur;
            cur *= 10;
        }
        return res;
    }
}