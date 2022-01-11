// 组件
import Loading from './components/loading/loading.vue'
import Swipe from './components/swipe/swipe.vue'
import SwipeCard from './components/swipe/swipeCard.vue'

// 函数
import Message from '@components/message/message.js'

// 将导入的组件和函数分别存入一个数组
let componentsArr = [Loading, Swipe, SwipeCard]
// let functionsArr = [Message]

let jianUI = {
  install: (app)=>{ 
    app.config.globalProperties.jianUI = jianUI
    componentsArr.forEach(i => {
      app.component(i.name, i)
    })
  },
  message: Message, //消息提示框
}


// 全局导出，直接use即可使用
export default jianUI
// 局部导出，需调用component方法全局注册组件
export {
  Loading,      //加载
  Swipe,        //轮播图
  SwipeCard     //轮播卡片
}

