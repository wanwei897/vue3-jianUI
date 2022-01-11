<template>
  <div>
    <form method="post" enctype="multipart/form-data">
      <div>
        <label for="image_uploads">上传图片</label>
        <input type="file" id="image_uploads" name="image_uploads" accept=".jpg, .jpeg, .png" multiple>
      </div>
      <div class="preview">
        <p>No files currently selected for upload</p>
      </div>
      <div>
        <!-- <button> Submit</button> -->
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'jian-fileUpload',
  data(){
    return{
      ifAllow_multiple: true, // 是否允许上传多个文件
      ifAllow_directory: false, //是否允许上传文件夹（只在部分浏览器有用，比如webkit, 为true时只能上传文件夹）
      acceptType:[ //允许上传文件的格式，可以是 .xxx 或 MIME 以及其他类型
        '.doc, application/msword', //doc
        '.docx, application/vnd.openxmlformats-officedocument.wordprocessingml.document', //docx
        '.xml, application/xml, text/xml', //xml
      ]
    }
  },
  mounted(){
    // 上传文件input元素
    const input = document.querySelector('input')
    // 文件信息预览区
    const preview = document.querySelector('.preview')

    // 上传文件后触发
    input.addEventListener('change',updateImageDisplay)

    // 上传文件后调用
    function updateImageDisplay(){
      // 移除的preview子元素
      while(preview.firstChild) {
        preview.removeChild(preview.firstChild)
      }

      console.log(input.files);
      const curFiles = input.files
      
      if(curFiles.length === 0){ //上传文件数量为0
        let el = document.createElement('p')
        el.innerText = 'no files currently selected for upload'
        preview.appendChild(el)
      } else {
        const ol = document.createElement('ul')
        preview.appendChild(ol)

        //上传成功后展示图片、名称和大小
        for(let file of curFiles){
          // 文件验证
          if(validateFileType(file)) {
            const li = document.createElement('li')
            const img = document.createElement('img')
            img.style.width = '160px'
            img.style.height = '90px'
            li.innerText = file.name + '  ' + returnFileSize(file.size)
            img.src = URL.createObjectURL(file);
            li.appendChild(img)
            ol.appendChild(li)      
          } else{
            const li = document.createElement('li')
            li.innerText = 'File ' + file.name + ' is not valid ,please check out the fileType'
            ol.appendChild(li)
          }
        }
      }
    }

    // 验证上传文件的类型
    const fileTypes = [
      'image/jpeg',
      'image/pjpeg',
      'image/png'
    ]
    function validateFileType(file){
      return fileTypes.includes(file.type);
    }

    // 接收文件的大小并将其转化为用 bytes/KB/MB 表示的格式良好的大小
    function returnFileSize(size){
      if(size < 1024){
        return size + 'bytes'
      } else if(size >= 1024 && size < 1048576){
        return (size/1024).toFixed(1) + 'KB'
      } else if(size > 1048576)
        return (size/1048576).toFixed(1) + 'MB'
    }
  }
}
</script>

<style scoped>
form{
  margin-top: 20px;
  margin-left: 50px;
}
label{
  background: linear-gradient(rgb(91, 130, 204),rgb(26, 91, 231));
}
input{
  opacity: 0;
}
/* img{
  width: 160px;
  height: 90px;
} */
</style>
