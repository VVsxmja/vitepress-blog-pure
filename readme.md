# VitePress Blog Pure

一个极简的博客框架。你最爱的 Vue 全家桶。[Demo](https://vvsxmja.github.io/vitepress-blog-pure/)

> 2023-7-5：
> 
> Demo 暂时坏掉了，因为这个仓库的 Github Pages 需要部署到子目录，而 VitePress 没有根据 `base` 生成正确的内链地址。
> 
> 已经看到有[一个PR](https://github.com/vuejs/vitepress/pull/2578)修复这个 bug 了。等更新。
>
> 如果 clone 下来在本地跑的话应该是没问题的。

## 使用方法

### 怎么安装

以后会做成 npm package 。

现在的使用方法：

#### clone 这个仓库

```shell
git clone https://github.com/VVsxmja/vitepress-blog-pure.git
```

#### 安装依赖

```shell
npm install
```

#### 写文章

关于写文章需要注意的地方见后文。

#### 预览

```shell
npm run dev
```

### 写文章的格式

这个主题支持 VitePress 到目前（2023-7-5）支持的所有 Markdown 扩展语法。

#### frontmatter

这个主题使用的 frontmatter 字段如下：

- `layout` ：为 `home` 表示该页为首页。
- `title` ：文章的标题，会被展示在首页文章列表和浏览器标签上。
- `date` ：文章的创建日期，用于在首页文章列表中给文章排序。

### 写的文章放在哪里

下面这些路径上的文章会被自动展示在网站中。

#### `index.md`

博客的首页。里面的内容会被展示在首页的文章列表上方。

#### `posts/*.md`

`posts/` 目录下的所有文章，会被按日期排序后展示在首页的文章列表中。

#### 其他路径

你当然可以把文章存储在你想要的任何地方。但其他地方的文档不会被自动展示。你需要自行添加指向它们的链接，或者[包含](https://vitepress.dev/guide/markdown#markdown-file-inclusion)它们。

## 待实现的功能

这个主题还正在施工中，因为是纯自定义主题，而不是默认主题的扩展，所以很多原版自带的功能尚未完成。

- [ ] 展示文章的创建日期和最后编辑日期
- [ ] 标签 Tag
- [ ] 在文章两侧展示目录 `[[toc]]` ，支持移动端
- [ ] 导航栏的按钮暂时是假的，把它修好
- [ ] 暗黑模式
- [ ] 把 CSS 里的常量换成变量
- [ ] 自带的滚动条太丑了，换一个好看的

## 感谢

感谢 [VitePress](https://github.com/vuejs/vitepress) 和 [UnoCSS](https://github.com/unocss/unocss) 这两个超厉害的框架。

感谢 [The Vue Point（Vue 官方博客）](https://github.com/vuejs/blog) ，我从这里参考了一些代码。

感谢 [squidfunk/mkdocs-material](https://github.com/squidfunk/mkdocs-material) ，我从这里借鉴了一些设计。

感谢 [airene/vitepress-blog-pure](https://github.com/airene/vitepress-blog-pure) ，虽然没有直接参考代码，但是阅读源代码给了我很多启发。