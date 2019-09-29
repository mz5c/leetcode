### 解题思路
>了解`tr`、`sort`、`uniq`、`awk`用法即可

```
cat words.txt | tr -s ' ' '\n' | sort | uniq -c | sort -r | awk '{ print $2, $1 }'
```