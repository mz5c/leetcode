### 解题思路
注意下面两条语句的区别
```mysql
# 下面这条可以正常运行
delete from Person where id not in( 
    select t.id from (
        select min(id) as id from Person group by email
    ) t
)

# 这条则会报错，You can't specify target table 'Person' for update in FROM clause
delete from Person where id not in( 
    select min(id) as id from Person group by email
)
```
You can't specify target table 'person' for update in FROM clause. https://stackoverflow.com/questions/45494/mysql-error-1093-cant-specify-target-table-for-update-in-from-clause