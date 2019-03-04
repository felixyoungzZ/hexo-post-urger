# 一个督促你写博客的 Hexo 脚本
> 灵感来自于 [not-paid](https://github.com/kleampa/not-paid) 以及懒癌末期，为了自己的网站不变成透明，赶紧写博客吧，纯属娱乐 ^.^

## 效果
* 构建生成静态文件的时候设置一个以传入的时间为 deadline
* 长时间不写博客，博客就会逐渐透明
* 每次构建都会刷新 deadline

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