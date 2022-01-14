介绍：web worker
方法：
createWorker：创建web worker，并在子线程里执行fn方法，子线程需要用户自己关闭

示例：
var myWorker = this.jianUI.worker.createWorker(() => {
  self.onmessage = (e) => {
    console.log(e.data)
    if(e.data === 'Are you ready?') {
      console.log('Im ready.');
      self.close();
    }
  }
})
myWorker.postMessage('Are you ready?')