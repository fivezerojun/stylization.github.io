import { createApp } from 'vue'
import { ElAffix, ElAlert, ElBacktop, ElButton, ElIcon, ElMenu, ElMenuItem } from 'element-plus'
import 'element-plus/es/components/affix/style/css'
import 'element-plus/es/components/alert/style/css'
import 'element-plus/es/components/backtop/style/css'
import 'element-plus/es/components/button/style/css'
import 'element-plus/es/components/icon/style/css'
import 'element-plus/es/components/menu/style/css'

import App from './App.vue'
import './styles.css'

createApp(App)
  .use(ElAffix)
  .use(ElAlert)
  .use(ElBacktop)
  .use(ElButton)
  .use(ElIcon)
  .use(ElMenu)
  .use(ElMenuItem)
  .mount('#app')
