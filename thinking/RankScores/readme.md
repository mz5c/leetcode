### 解题思路
>熟悉sql语法即可，看下面代码注释

```mysql
SELECT
  Score,
  (SELECT count(*) FROM (SELECT distinct Score s FROM Scores) tmp WHERE s >= Score) Rank
FROM Scores
ORDER BY Score desc
```
`SELECT distinct Score s FROM Scores`用于计算排名，结合`count(*)`及`s >= Score`