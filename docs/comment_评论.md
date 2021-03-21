## 如何在文章中添加评论？
How to add comment field in your article?  

编辑站点的 `_config.yml` ，添加 `disqus_shortname` 字段，设置如下
```yml
disqus_shortname: your-disqus-shortname
# 多说评论则替换成如下配置：（不建议使用）
# duoshuo_shortname: your-duoshuo-shortname
```
如需取消某个页面的评论，在md文件的front-matter中增加  
Disable comment in a page by this config
```
comments: false
```