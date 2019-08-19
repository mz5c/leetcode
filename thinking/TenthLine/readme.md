### 解题思路
```bash
$ tail -n+10 file.txt|head -1
```
`tail -n+10 file.txt`输出第十行到文件末尾 
`head -1`输出第一行  
组合得到获取第十行，不符合则返回空
