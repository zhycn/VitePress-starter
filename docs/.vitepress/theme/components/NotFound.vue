<template>
  <div class="not-found">
    <p class="code">404</p>
    <h1 class="title">页面未找到</h1>
    <p class="subtitle">抱歉，您访问的页面不存在或已被移除</p>
    <div class="actions">
      <a class="link" href="/">返回首页</a>
    </div>
  </div>
</template>

<style scoped>
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  text-align: center;
  min-height: calc(100vh - var(--vp-nav-height) - var(--vp-footer-height, 0px));
}

.code {
  font-size: 8rem;
  font-weight: 700;
  line-height: 1;
  color: var(--vp-c-brand-1);
  opacity: 0.3;
  margin: 0;
}

.title {
  font-size: 2rem;
  font-weight: 600;
  margin: 1rem 0 0.5rem;
  color: var(--vp-c-text-1);
}

.subtitle {
  font-size: 1rem;
  color: var(--vp-c-text-2);
  margin: 0 0 2rem;
}

.link {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: var(--vp-c-brand-1);
  color: #fff;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  transition: background 0.25s;
}

.link:hover {
  background: var(--vp-c-brand-2);
}
</style>
