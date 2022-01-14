let worker = {
  createWorker: (fn) => {
    var blob = new Blob(['(' + fn.toString() +')()'])
    var url = window.URL.createObjectURL(blob)
    var worker = new Worker(url)
    return worker
  }
}

export default worker