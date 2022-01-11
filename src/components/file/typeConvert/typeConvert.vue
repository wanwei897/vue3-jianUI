<template>
  原始数据：<span id="original">hello world</span><br>
  blob: <span id="blob"></span><br>
  arrayBuffer: <span id="arrayBuffer"></span><br>
  buffer: <span id="buffer"></span><br>
  binaryString: <span id="binaryString"></span><br>
  dataUrl: <span id="dataUrl"></span><br>
  text: <span id="text"></span><br>
</template>

<script>
export default {
  name: 'jian-typeConvert',
  mounted(){
    let data = 'hello world'

    //转blob
    let blob = new Blob([data])
    document.getElementById('blob').innerText = blob
    console.log('blob:', blob);

    // blob转 arrayBuffer、binaryString、dataUrl、text，arrayBuffer转 buffer
    let arrayBuffer
    let binaryString
    let dataUrl
    let text
    let buffer

    let reader1 = new FileReader()
    let reader2 = new FileReader()
    let reader3 = new FileReader()
    let reader4 = new FileReader()

    reader1.readAsArrayBuffer(blob)
    reader2.readAsBinaryString(blob)
    reader3.readAsDataURL(blob)
    reader4.readAsText(blob)
    reader1.onload = ()=>{ 
      arrayBuffer = reader1.result
      document.getElementById('arrayBuffer').innerText = arrayBuffer
      console.log('arrayBuffer:', arrayBuffer)

      // arrayBuffer 转 buffer
      buffer = Buffer.alloc(arrayBuffer.byteLength)
      let view = new Uint8Array(arrayBuffer)
      for(let i=0; i<buffer.length; i++){
        buffer[i] = view[i]
      }
      document.getElementById('buffer').innerText = buffer
      console.log('buffer:', buffer, buffer.toString())
    }
    reader2.onload = ()=>{ 
      binaryString = reader2.result
      document.getElementById('binaryString').innerText = binaryString
      console.log('binaryString:', binaryString)
    }
    reader3.onload = ()=>{ 
      dataUrl = reader3.result
      document.getElementById('dataUrl').innerText = dataUrl
      console.log('dataUrl:', dataUrl)
    }
    reader4.onload = ()=>{ 
      text = reader4.result 
      document.getElementById('text').innerText = text
      console.log('text:', text)
    }   
  }
}
</script>

<style>

</style>