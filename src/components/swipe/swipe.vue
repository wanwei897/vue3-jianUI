<template>
    <div class="swipe" ref="myRef">
      <!-- 左右箭头 -->
      <button class="button_arrow" @click="swipeRoll_right">
        <img src="../../assets/image/swipe/arrow_left.png">
      </button>
      <button class="button_arrow" @click="swipeRoll_left">
        <img src="../../assets/image/swipe/arrow_right.png">
      </button>
      <!-- 轮播图条例 -->
      <div class='item' v-for="(img,index) in imgUrl" :position="index+1" :key="index">
        <img :src="img" alt="">
      </div>
    </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'jian-swipe',
  data(){
    return {
      imgUrl:[
        require('../../assets/image/swipe/swipe_1.jpg'),
        require('../../assets/image/swipe/swipe_2.jpg'),
        require('../../assets/image/swipe/swipe_3.jpg'),
        require('../../assets/image/swipe/swipe_4.jpg')    
      ], //图片路径
      ifRoll_swipe: true, //图片能否滚动和轮播
      timer_swipe: '', //图片轮播 定时器
    }
  },
  methods:{
    // 图片自动轮播函数
    swipeRoll (){
      if(!this.ifRoll_swipe) return
      this.ifRoll_swipe = false

      let swipeItem = $(this.$refs.myRef).find('.item') //轮播图条例对象
      let swipeW = $(this.$refs.myRef).width() //轮播图宽度
      let swipeItemN = swipeItem.length //轮播图条例个数

      swipeItem.each((index,i) => {
        if($(i).attr('position') == swipeItemN){
          // 最左边条例,移动到最右边
          $(i).css('z-index', '0')
          $(i).css('transform', 'translateX(' + ($(i).attr('position') - 2)*swipeW + 'px)')
          $(i).attr('position', swipeItemN - 1)
        } else {
          // position为1的条例，position变为最大，位置向左移动一格
          // 其他条例，position - 1，位置向左移动一格
          $(i).css('z-index', '1')
          $(i).css('transform', 'translateX(' + ($(i).attr('position') - 2)*swipeW + 'px)')
          $(i).attr('position', $(i).attr('position') == 1 ? swipeItemN : ($(i).attr('position') - 1))
        }
      })
    },
    // 图片向左滚动函数，点击右箭头触发
    swipeRoll_left(){
      this.swipeRoll()
      //重置图片轮播定时器
      clearInterval(this.timer_swipe)
      this.timer_swipe = setInterval(this.swipeRoll, 4000)
    },
    // 图片向右滚动函数，点击左箭头触发
    swipeRoll_right(){
      if(!this.ifRoll_swipe) return
      this.ifRoll_swipe = false

      let swipeItem = $(this.$refs.myRef).find('.item') //轮播图条例对象
      let swipeW = $(this.$refs.myRef).width() //轮播图宽度
      let swipeItemN = swipeItem.length //轮播图条例个数

      swipeItem.each((index,i) => {
        if($(i).attr('position') == swipeItemN){
          // 最左边条例,position变为1，位置向右移动一格
          $(i).css('z-index', '1')
          $(i).css('transform', 'translateX(0px)')
          $(i).attr('position', 1)
        } else if($(i).attr('position') == swipeItemN - 1){
          // 最右边条例，position变为最大，位置移到最左
          $(i).css('z-index', '0')
          $(i).css('transform', 'translateX(-' + swipeW + 'px)')
          $(i).attr('position', swipeItemN)
        }else{
          // 其他条例，position + 1，位置向右移动一格
          $(i).css('z-index', '1')
          $(i).css('transform', 'translateX(' + $(i).attr('position')*swipeW + 'px)')
          $(i).attr('position', Number($(i).attr('position')) + 1)
        }
      })

      clearInterval(this.timer_swipe)
      this.timer_swipe = setInterval(this.swipeRoll, 4000)
    }
  },
  mounted(){
    let swipeItem = $(this.$refs.myRef).find('.item') //轮播图条例对象
    let swipeW = $(this.$refs.myRef).width() //轮播图宽度
    let swipeItemN = swipeItem.length //轮播图条例个数

    //设置每个条例的起始位置
    swipeItem.each((index,i) => {
      if(index == 0){
        $(i).css('z-index', '1')
      }
      if(index == swipeItemN -1){
        $(i).css('transform','translateX(-' + swipeW + 'px)')
      } else{
        $(i).css('transform','translateX(' + index*swipeW + 'px)')
      }
    })

    //图片轮播 定时器
    this.timer_swipe = setInterval(this.swipeRoll, 4000) 
  },
  watch: {
    // 允许图片轮播或图片切换的开关，每次图片轮播或切换后关闭，等待500ms后开启
    ifRoll_swipe: function(newV){
      if(!newV) {
        setTimeout(() => { this.ifRoll_swipe = true }, 500)
      }
    }
  }
}
</script>

<style scoped>
.swipe {
  width: 800px;
  height: 400px;
}
.swipe {
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
}
.swipe:hover .button_arrow {
  opacity: 1;
}
.swipe:hover .button_arrow:nth-child(1) {
  left: 15px;
}
.swipe:hover .button_arrow:nth-child(2) {
  right: 15px;
}
.swipe .item {
  position: absolute;
  width: 100%;
  height: 100%;
  transition: transform 0.4s;
}
.swipe .item img {
  width: 100%;
  height: 100%;
}
.swipe .button_arrow {
  opacity: 0;
  position: absolute;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 10;
  margin: 0;
  padding: 0;
  cursor: pointer;
  transition: 0.3s;
}
.swipe .button_arrow:hover {
  background-color: rgba(0, 0, 0, 0.3);
}
.swipe .button_arrow img {
  display: inline-block;
  position: absolute;
  width: 30px;
  height: 30px;
  top: 5px;
  left: 5px;
  background-color: transparent;
}
.swipe .button_arrow:nth-child(1) {
  left: 0px;
}
.swipe .button_arrow:nth-child(2) {
  right: 0px;
}
</style>>

