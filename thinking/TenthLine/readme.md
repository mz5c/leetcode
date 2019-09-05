### 解题思路
```bash
$ tail -n+10 file.txt|head -1
```
`tail -n+10 file.txt`输出第十行到文件末尾  
`head -1`输出第一行  
组合得到获取第十行，不符合则返回空

---------------------------------
另一种解法
```bash
count=0
while read line; do
  ((++count))
  if [ "${count}" -eq 10 ]; then
    echo $line
  fi
done < file.txt
```
或者  
`sed -n '10p' file.txt`  
或者  
`awk 'NR == 10 {print $0}' file.txt`
