<template >
  <div id="">
    这是子组件的内容：
    名字: cwj, 代码：{{code}} 
    <button @click="code = Date.now()">修改代码</button>
  </div>
</template>

<script>
export default {
  props:{
    value: Number
  },
  emits: {
  },
  data(){
    return{
      code: '123456'
    }
  },
  methods:{
  },
  created(){
    console.log(123);
  }
}
</script>

<style scoped>
.contain_2{
  color: red;
}
</style>>

