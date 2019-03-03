# 一个督促你写博客的 Hexo 脚本
> 灵感来自于 [not-paid](https://github.com/kleampa/not-paid) 以及懒癌末期，为了自己的网站不变成透明，赶紧写博客吧，纯属娱乐 ^.^

## 使用方法：
1. 把脚本放置在 Hexo 博客根目录的 `scripts` 文件夹。
2. 在 `themes/你的主题/layout/layout.ejs` 如下的位置加上字段：

```html
<body>
  <!---  layout 的内容  --->
  <!---  60代表天数  --->
  <%- post_urger(60) %>
</body>
```

3. 然后重新生成博客静态文件并部署就可以啦~