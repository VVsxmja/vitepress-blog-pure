# VitePress Theme Blog Pure

一个极简的博客框架。VitePress + UnoCSS + Vue 全家桶。[Demo](https://vvsxmja.github.io/vitepress-theme-blog-pure/)

## 使用方法

这个仓库本身是一个模板仓库。最开箱即用的使用方式就是[使用此模板创建你自己的仓库](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template)。

用这种方法，你可以直接使用该仓库中已经配置好的 UnoCSS 和 PostCSS 等工具，用现成的 GitHub Action Workflow 自动部署 Github Pages ，还能更方便的魔改该主题，加入你自己的元素。

以后可能会做成 npm package 的形式发布。

### 使用模板的方法

#### 创建仓库并克隆

[使用此模板创建仓库](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template)，之后将其克隆到本地。

#### 安装依赖

建议使用 [pnpm](https://pnpm.io/)

```shell
pnpm install
```

不喜欢 pnpm 的可能需要自行到 `package.json` 中把 `"packageManager": "pnpm@x.y.z"` 去掉。

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

## 部署静态站点

执行 `pnpm run build` 或者 `pnpx vitepress build` 可以生成静态站点。

**注意，你需要在 [`.vitepress/config.ts`](.vitepress/config.ts) 中修改 `base` 字段为正确的值，以保证生成的内部链接全部指向正确的地址。**

例如你最终部署的位置为 `someone.github.io/someone_s_blog/` ，则需要将 `base` 改为 `someone_s_blog` ，又比如需要部署到 `blog.someone.com` （根目录） ，则需要将 `base` 改为 `/`

### GitHub Pages

这个仓库提供了一个 [GitHub Action Workflow](.github/workflows/pages.yml) 可供参考。

如果你使用该模板来创建仓库，则只需到仓库设置中启用 Github Pages 即可。

## 写文章的格式

这个主题支持 VitePress 到目前（2023-7-5）支持的所有 Markdown 扩展语法。

### frontmatter

这个主题使用的 frontmatter 字段如下：

- `layout` ：为 `home` 表示该页为首页。
- `title` ：文章的标题，会被展示在首页文章列表和浏览器标签上。
- `date` ：文章的创建日期，用于在首页文章列表中给文章排序。

### 摘记

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

## 待实现的功能

这个主题还正在施工中，因为是纯自定义主题，而不是默认主题的扩展，所以很多原版自带的功能尚未完成。

见 https://github.com/VVsxmja/vitepress-theme-blog-pure/issues/1 。

如果有什么你觉得应该有却没有的功能，欢迎提 issue 来讨论。

## 感谢

感谢 [VitePress](https://github.com/vuejs/vitepress) 和 [UnoCSS](https://github.com/unocss/unocss) 这两个超厉害的框架。

感谢 [The Vue Point（Vue 官方博客）](https://github.com/vuejs/blog) ，我从这里参考了一些代码。

感谢 [squidfunk/mkdocs-material](https://github.com/squidfunk/mkdocs-material) ，我从这里借鉴了一些设计。

感谢 [airene/vitepress-blog-pure](https://github.com/airene/vitepress-blog-pure) ，虽然没有直接参考代码，但是阅读源代码给了我很多启发。
