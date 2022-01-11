import { createApp } from 'vue'
import App from './App.vue'

// 导入jianUI
import jianUI from './jian-ui'

const app = createApp(App)

app.use(jianUI)

app.config.globalProperties.xxx = '123'
app.mount('#app')
