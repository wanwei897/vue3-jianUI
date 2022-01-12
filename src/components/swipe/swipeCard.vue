<template>
   <div class="swipeCard" ref="myRef">
     <div class="content">
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
    </div>
</template>

<script>
import $ from '../../plugins/jquery.min.js'
export default {
  name: 'jian-swipeCard',
  data(){
    return {
      imgUrl:[
        require('../../assets/image/swipe/swipe_1.jpg'),
        require('../../assets/image/swipe/swipe_2.jpg'),
        require('../../assets/image/swipe/swipe_3.jpg'),
        require('../../assets/image/swipe/swipe_4.jpg'),
        require('../../assets/image/swipe/swipe_3.jpg')    
      ], //图片路径
      ifRoll_swipe: true, //图片能否滚动和轮播
      timer_swipe: ''
    }
  },
  methods: {
    // 图片自动轮播函数
    swipeRoll (){
      if(!this.ifRoll_swipe) return
      this.ifRoll_swipe = false

      let swipeItem = $(this.$refs.myRef).find('.content').find('.item')
      let swipeW = swipeItem.width() 
      let swipeItemN = swipeItem.length

      swipeItem.each((index,i) => {
        if($(i).attr('position') == 1){
          // 第一张图片，位置向左移动一格，position变为最大
          $(i).css('z-index', '2')
          $(i).css('transform','translateX(0px)')
          $(i).find('img').css('opacity','0.6')
          $(i).attr('position', swipeItemN)
        }else if($(i).attr('position') == 2){
          // 第二张图片，位置向左移动一格并突出显示，position - 1
          $(i).css('z-index', '3')
          $(i).css('transform','translateX(' + swipeW*0.75 + 'px) scale(1.25)')
          $(i).find('img').css('opacity','1')
          $(i).attr('position', 1)
        }else if($(i).attr('position') == 3){
          // 第三张图片，位置向左移动一格并突出显示，position - 1
          $(i).css('z-index', '2')
          $(i).css('transform','translateX(' + swipeW*1.5 + 'px)')
          $(i).attr('position', 2)
        }else if($(i).attr('position') == swipeItemN - 1){
          // 倒数第二张图片，位置移到最右边，position - 1
          $(i).css('z-index', '0')
          $(i).css('transform','translateX(' + (swipeItemN - 2)*swipeW*0.75 + 'px)')
          $(i).attr('position', $(i).attr('position') - 1)
        }else if($(i).attr('position') == swipeItemN){
          // 倒数第一张图片，位置向左移动一格，position - 1
          $(i).css('z-index', '1')
          $(i).css('transform','translateX(-' + swipeW*0.75 + 'px)')
          $(i).attr('position', $(i).attr('position') - 1)
        }else{
          // 其他图片，位置向左移动一格，position - 1
          $(i).css('z-index', '0')
          $(i).css('transform','translateX(' + ($(i).attr('position') - 1)*swipeW*0.75 + 'px)')
          $(i).attr('position', $(i).attr('position') - 1)
        }
      })
    },
    swipeRoll_left(){
      this.swipeRoll()
      // clearInterval(this.timer_swipe)
      // this.timer_swipe = setInterval(this.swipeRoll, 4000)
    },
    swipeRoll_right(){
      if(!this.ifRoll_swipe) return
      this.ifRoll_swipe = false

      let swipeItem = $(this.$refs.myRef).find('.content').find('.item')
      let swipeW = swipeItem.width() 
      let swipeItemN = swipeItem.length

      swipeItem.each((index,i) => {
        if($(i).attr('position') == 1){
          // 第一张图片，位置向右移动一格，position + 1
          $(i).css('z-index', '2')
          $(i).css('transform','translateX(' + swipeW*1.5 + 'px)')
          $(i).find('img').css('opacity','0.6')
          $(i).attr('position', 2)
        }else if($(i).attr('position') == 2){
          // 第二张图片，位置向右移动一格，position + 1
          $(i).css('z-index', '1')
          $(i).css('transform','translateX(' + swipeW*2.25 + 'px)')
          $(i).attr('position', 3)
        }else if($(i).attr('position') == swipeItemN - 2){
          // 最右边图片，位置移到最左，position + 1
          $(i).css('z-index', '0')
          $(i).css('transform','translateX(-' + swipeW*0.75 + 'px)')
          $(i).attr('position', Number($(i).attr('position')) + 1)
        }else if($(i).attr('position') == swipeItemN - 1){
          // 倒数第二张图片，位置向右移动一格，position + 1
          $(i).css('z-index', '2')
          $(i).css('transform','translateX(0px)')
          $(i).attr('position', Number($(i).attr('position')) + 1)
        }else if($(i).attr('position') == swipeItemN){
          // 倒数第一张图片，位置向右移动一格并突出显示，position为1
          $(i).css('z-index', '3')
          $(i).css('transform','translateX(' + swipeW*0.75 + 'px) scale(1.25)' )
          $(i).find('img').css('opacity','1')
          $(i).attr('position', 1)
        }else{
          // 其他图片，位置向右移动一格，position + 1
          $(i).css('z-index', '0')
          $(i).css('transform','translateX(' + (Number($(i).attr('position')) + 1)*swipeW*0.75 + 'px)')
          $(i).attr('position', Number($(i).attr('position')) + 1)
        }
      })

      clearInterval(this.timer_swipe)
      this.timer_swipe = setInterval(this.swipeRoll, 4000)
    }
  },
  mounted(){
    // 图片之间的间隔为 swipeW*0.75, 中间突出显示的图片放大1.25倍
    let swipeItem = $(this.$refs.myRef).find('.content').find('.item')
    let swipeW = swipeItem.width() 
    let swipeItemN = swipeItem.length

    swipeItem.each((index,i) => {
      if(index == 0){
        // 第一张图片，位置在中间突出显示
        $(i).css('z-index', '3')
        $(i).find('img').css('opacity','1')
        $(i).css('transform','translateX(' + swipeW*0.75 + 'px) scale(1.25)')
      }else if(index == 1){
        // 第二张图片，位置第一张图片右边
        $(i).css('z-index', '2')
        $(i).css('transform','translateX(' + swipeW*1.5 + 'px)')
      }else if(index == 1){
        // 第三张图片，位置第二张图片右边
        $(i).css('z-index', '1')
        $(i).css('transform','translateX(' + swipeW*2.25 + 'px)')
      }else if(index == swipeItemN - 2){
        // 倒数第二张图片，位置在最左边，刚开始属于隐藏状态
        $(i).css('z-index', '1')
        $(i).css('transform','translateX(-' + swipeW*0.75 + 'px)')
      }else if(index == swipeItemN - 1){
        // 倒数第一张图片，位置在最左边第二个
        $(i).css('z-index', '2')
        $(i).css('transform','translateX(0px)')
      }else{
        // 其他图片，均在中间突出显示的图片右边
        $(i).css('z-index', '0')
        $(i).css('transform','translateX(' + (index + 1)*swipeW*0.75 + 'px)')
      }
    })
    this.timer_swipe = setInterval(this.swipeRoll, 4000) 
  },
  watch: {
    // 允许图片轮播或图片切换的开关，每次图片轮播或切换后关闭，等待500ms后开启
    ifRoll_swipe: function(newV){
      if(!newV) {
        setTimeout(() => { this.ifRoll_swipe = true }, 600)
      }
    }
  }
}
</script>

<style scoped>
.swipeCard {
  margin-top: 20px;
  width: 1000px;
  height: 300px;
  box-shadow: 0px 0px 2px 2px rgba(153, 149, 139, 0.5);
}
.swipeCard .content {
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  border: 1px solid black;
  top: 25px;
  left: 50px;
  width: 800px;
  height: 250px;
}
.swipeCard:hover .button_arrow {
  opacity: 1;
}
.swipeCard:hover .button_arrow:nth-child(1) {
  left: 15px;
}
.swipeCard:hover .button_arrow:nth-child(2) {
  right: 15px;
}
.swipeCard .item {
  position: absolute;
  width: 320px;
  height: 160px;
  transition: transform 0.5s;
}
.swipeCard .item:nth-child(n){
  background: rgb(17, 16, 16);
}
.swipeCard .item:nth-child(2n){
  background: rgb(114, 109, 109);
}
.swipeCard .item img {
  width: 100%;
  height: 100%;
  opacity: 0.6;
}
.swipeCard .button_arrow {
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
.swipeCard .button_arrow:hover {
  background-color: rgba(0, 0, 0, 0.3);
}
.swipeCard .button_arrow img {
  display: inline-block;
  position: absolute;
  width: 30px;
  height: 30px;
  top: 5px;
  left: 5px;
  background-color: transparent;
}
.swipeCard .button_arrow:nth-child(1) {
  left: 0px;
}
.swipeCard .button_arrow:nth-child(2) {
  right: 0px;
}
</style>