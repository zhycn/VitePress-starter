import DefaultTheme from 'vitepress/theme'
import './custom.css'
import Card from './components/Card.vue'
import Badge from './components/Badge.vue'
import NotFound from './components/NotFound.vue'
import { useRoute } from 'vitepress'
import { defineComponent, h } from 'vue'

const CustomLayout = defineComponent({
  setup() {
    const route = useRoute()
    if (route.path === '/404.html' || route.notFound) {
      return () => h(NotFound)
    }
    return () => h(DefaultTheme.Layout)
  }
})

export default {
  extends: DefaultTheme,
  Layout: CustomLayout,
  enhanceApp({ app }) {
    app.component('Card', Card)
    app.component('Badge', Badge)
  }
}
