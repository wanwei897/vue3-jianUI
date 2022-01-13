// 组件
import Loading from './components/loading/loading.vue'
import Swipe from './components/swipe/swipe.vue'
import SwipeCard from './components/swipe/swipeCard.vue'

// 接口
import Message from './interfaces/message/message.js'
import Faker from './interfaces/faker/faker.js'

// 将导入的组件和函数分别存入一个数组
let componentsArr = [Loading, Swipe, SwipeCard]

let jianUI = {
  install: (app)=>{ 
    app.config.globalProperties.jianUI = jianUI
    componentsArr.forEach(i => {
      app.component(i.name, i)
    })
    // 控制台打印信息jianUI信息
    console.log('%c jianUI %c wanwei897 ',`
      color: #fff;
      background-color: blue;
      line-height: 20px;
      height: 20px;
      border-radius: 5px 0 0 5px;
      font-size: 15px;
    `,`
      color: #fff;
      background-color: orange;
      line-height: 20px;
      height: 20px;
      border-radius: 0 5px 5px 0;
      font-size: 15px;
    `)
  },
  message: Message, //消息提示框
  faker: Faker, //假数据
}


// 全局导出，直接use即可使用
export default jianUI
// 局部导出，需调用component方法全局注册组件
export {
  Loading,      //加载
  Swipe,        //轮播图
  SwipeCard     //轮播卡片
}

