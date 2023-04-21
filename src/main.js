import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//element-plus引入
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import { createPinia } from 'pinia'


const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(store).use(router).use(createPinia()).use(ElementPlus, {
    locale: zhCn,
}).mount("#app");
