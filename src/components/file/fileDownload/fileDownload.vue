<template>
  <a id="downloadFlie">下载一个txt文件</a>
</template>

<script>
export default {
  name: 'jian-fileDownload',
  mounted(){
    //下载一个txt文件
    let blob = new Blob(['Hello World'])
    let url = URL.createObjectURL(blob)
    let a = document.getElementById('downloadFlie')
    a.download = 'helloworld.txt'
    a.href = url
  }
}
</script>

<style>

</style>