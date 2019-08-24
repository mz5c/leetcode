### 解题思路
注意id为奇数，description不为boring即可
```mysql
select id,movie,description,rating from cinema where id & 1 and description <> 'boring' order by rating desc
```