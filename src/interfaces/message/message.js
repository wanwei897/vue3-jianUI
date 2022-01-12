import $ from 'jquery'
import '@assets/css/message/message.css'

/*
消息提示框
type: @String，类型，可用的值有 normal(普通)|success(成功)|error(错误)|warn(警告)
duration: @Number|@String，持续时间
*/
function message(type = 'normal', duration = 3000){
  // 验证参数的合法性
  if(type !== 'normal' && type !== 'success' && type !== 'error' && type !== 'warn'){
    type = 'normal'
    console.warn('Warn: the first param in method message of jianUI must be one of normal,success,error and warn')
  }
  if(isNaN(Number(duration)) || duration === ''){
    console.warn('Warn: the second param in method message of jianUI must be integer with type Number or String')
  }

  // 移除先前的消息提示框
  if($('.jian_message').length){
    $('.jian_message').remove()
  }

  // 产生新的消息提示框
  var div  = document.createElement('div')
  div.classList.add('jian_message', 'jian_message_' + type)
  var child = "<i></i><span>这是消息提示!</span>"
  div.innerHTML = child
  document.body.appendChild(div)

  // 消息提示框的动画效果
  $(div).animate({ 'top': '30px', 'opacity': '1' })
  setTimeout( ()=> {
    $(div).animate({ 'top': '-45px', 'opacity': '0'}, () => {
      div.remove()
    })
  }, duration)
}

export default message