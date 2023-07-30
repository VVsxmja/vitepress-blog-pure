# VitePress Blog Pure

一个极简的博客框架。你最爱的 Vue 全家桶。[Demo](https://vvsxmja.github.io/vitepress-blog-pure/)

> 2023-7-5：
>
> Demo 暂时坏掉了，因为这个仓库的 Github Pages 需要部署到子目录，而 VitePress 没有根据 `base` 生成正确的内链地址。
>
> 已经看到有[一个 PR](https://github.com/vuejs/vitepress/pull/2578)修复这个 bug 了。等更新。
>
> 如果 clone 下来在本地跑的话应该是没问题的。
>
> 2023-7-26:
>
> 这个 PR 已经合入主线了，等下一个 release 应该就有了。

## 使用方法

### 怎么安装

以后会做成 npm package 。

现在的使用方法：

#### clone 这个仓库

```shell
git clone https://github.com/VVsxmja/vitepress-blog-pure.git
```

#### 安装依赖

建议使用 [pnpm](https://pnpm.io/)

```shell
pnpm install
```

#### 写文章

关于写文章需要注意的地方见后文。

#### 预览

```shell
pnpm run dev
```

或

```shell
pnpx vitepress dev
```

### 写文章的格式

这个主题支持 VitePress 到目前（2023-7-5）支持的所有 Markdown 扩展语法。

#### frontmatter

这个主题使用的 frontmatter 字段如下：

- `layout` ：为 `home` 表示该页为首页。
- `title` ：文章的标题，会被展示在首页文章列表和浏览器标签上。
- `date` ：文章的创建日期，用于在首页文章列表中给文章排序。

#### 摘记

摘记，也可以理解为一篇文章的简介，会被展示在首页文章列表中，对应文章标题的下方。

- 默认情况下，文章的摘记为空。
- 如果在 frontmatter 中 `excerpt` 字段的值为 `true` ，则文章中第一个分割线（`---`）之前的内容会被视作这篇文章的摘记。
- 如果在 frontmatter 中 `excerpt` 字段的值为一个字符串，则这个字符串会被视作这篇文章的摘记。

可以参考 [`posts/test-post.md`](posts/test-post.md) 、 [`posts/markdown-examples.md`](posts/markdown-examples.md) 和 [`posts/api-examples.md`](posts/api-examples.md) 以及它们在 Demo 中的文章列表内的效果，分别对应上面的三种情况。

### 写的文章放在哪里

下面这些路径上的文章会被自动展示在网站中。

#### `index.md`

博客的首页。里面的内容会被展示在首页的文章列表上方。

#### `posts/*.md`

`posts/` 目录下的所有文章，会被按日期排序后展示在首页的文章列表中。

#### 其他路径

你当然可以把文章存储在你想要的任何地方。但其他地方的文档不会被自动展示。你需要自行添加指向它们的链接，或者[包含](https://vitepress.dev/guide/markdown#markdown-file-inclusion)它们。

### 部署

执行 `npm run build` 或者 `npx vitepress build` 可以生成静态网站。

如果需要将博客部署在子目录下（例如 `someone.github.io/someone_s_blog/` ），则需要在 [`.vitepress/config.ts`](.vitepress/config.ts) 中更改 `base` 字段为对应的子目录。

#### GitHub Pages

这个仓库提供了一个 [GitHub Action Workflow](.github/workflows/pages.yml) 可供参考。

## 待实现的功能

这个主题还正在施工中，因为是纯自定义主题，而不是默认主题的扩展，所以很多原版自带的功能尚未完成。

见 https://github.com/VVsxmja/vitepress-blog-pure/issues/1 。

如果有什么你觉得应该有却没有的功能，欢迎提 issue 来讨论。

## 感谢

感谢 [VitePress](https://github.com/vuejs/vitepress) 和 [UnoCSS](https://github.com/unocss/unocss) 这两个超厉害的框架。

感谢 [The Vue Point（Vue 官方博客）](https://github.com/vuejs/blog) ，我从这里参考了一些代码。

感谢 [squidfunk/mkdocs-material](https://github.com/squidfunk/mkdocs-material) ，我从这里借鉴了一些设计。

感谢 [airene/vitepress-blog-pure](https://github.com/airene/vitepress-blog-pure) ，虽然没有直接参考代码，但是阅读源代码给了我很多启发。
