### 解题思路
```mysql
select Email from Person group by Email having count(Email) > 1
```
使用`group by`和`having`即可