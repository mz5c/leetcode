### 解题思路
看sql语句理解即可
```mysql
SELECT t1.Id
FROM Weather t1
INNER JOIN Weather t2
ON TO_DAYS(t1.RecordDate) = TO_DAYS(t2.RecordDate) + 1
WHERE t1.Temperature > t2.Temperature
```
注意`inner join`和`to_days`的使用