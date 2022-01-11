<template>
  <div id="jian_loading" class="wrap">
    <div>
      <img :src="loadingImg[0]">
      <span>加载中...</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'jian-loading',
  data(){
    return {
      loadingImg:[
        require('../../assets/image/loading/loading.png')
      ]
    }
  },
  created(){
  }
}
</script>

<style scoped>
.wrap{
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 10000;
  background: #f0eeee;
}
.wrap div{
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  font-size: 16px;
  color: #72B7FE;
}
img{
  display: inline-block;
  width: 35px;
  height: 35px;
  animation: rotate 1s linear infinite;
  margin-bottom: 10px;
}

@keyframes rotate{
  0%    { transform: rotate(0deg); }
  100%  { transform: rotate(360deg); }
}
</style>