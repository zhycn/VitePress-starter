# 图片资源

此目录存放文档所需的静态图片资源。

## 目录结构

- `og/` - Open Graph 社交分享图片（推荐尺寸 1200x630）
- `screenshots/` - 功能截图、演示图片
- `icons/` - 图标资源

## 使用方式

在 Markdown 中引用：

```md
![描述](/images/screenshots/example.png)
```

或在 frontmatter 中配置：

```yaml
---
head:
  - - meta
    - property: og:image
      content: /images/og/cover.png
---
```
