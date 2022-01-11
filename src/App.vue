<template>
  <div class="appWrap">
    <jian-loading v-if="true"></jian-loading>
  </div>
  <jian-swipe></jian-swipe>
  <button @click="showMessage">点击提示</button>
  <!-- <div class="messageBox xxx">
    <i></i>
    <span>这是消息提示!</span>
  </div> -->
</template>

<script>
// import loading from '@/components/loading/loading'
// import $ from 'jquery'
// import _ from 'lodash'
export default {
  name: 'App',
  components: {
  },
  props:{
  },

  data() {
    return {
    }
  },
  methods: {
    showMessage(){
      this.jianUI.message('xx', '')
    }
  },
  created() {
  },
  mounted() {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
*{
  margin: 0;
  padding: 0;
}
li{
  list-style: none;
}

.appWrap{
  position: relative;
  border: 1px solid #ac7d11;
  width: 400px;
  height: 200px;
  white-space: normal;
  margin: 40px 40px;
}
</style>
