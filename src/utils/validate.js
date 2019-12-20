/* 合法uri*/
export function validateURL(textval) {
  const urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/

  return urlregex.test(textval)
}

/* 统一社会信用代码验证*/
export function validateCreditCode(str) {
  var reg = /^[^_IOZSVa-z\W]{2}\d{6}[^_IOZSVa-z\W]{10}$/g

  return reg.test(str)
}

/* 手机号验证*/
export function validatePhone(str) {
  var reg = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/

  return reg.test(str)
}

/* 验证 密码 数字、大小写字母*/
export function validatePwd(str) {
  var reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{6,12}$/

  return reg.test(str)
}

/* 4位 验证码*/
export function validateFourCode(str) {
  const reg = /^[a-zA-Z0-9]{4}$/
  return reg.test(str)
}


/* 6位 验证码*/
export function validateSixCode(str) {
  var reg = /^\d{6}$/

  return reg.test(str)
}

function num(e) {
  return e < 10 ? '0' + e : e
}

/* 时间 格式化*/
export function dateTime(time, type) {
  let datatime = time.split('.')[0]
  var date = new Date(datatime.replace(/-/g, '/'));

  const dateIndex = new Date(date),
    y = dateIndex.getFullYear() | '',
    m = dateIndex.getMonth() + 1 | '',
    d = dateIndex.getDate() | '',
    h = dateIndex.getHours() | '',
    mm = dateIndex.getMinutes() | '',
    s = dateIndex.getSeconds() | ''

  let backData

  if (type == 'date') {
    backData = `${y}年${num(m)}月${num(d)}日 ${num(h)}:${num(mm)}:${num(s)}`
  } else {
    backData = `${y}年${num(m)}月${num(d)}日`
  }
  return backData
}


/* 输入延迟 */
export function debounce(func, delay) {
  let timer

  return function(...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}


// 获取一个月有多少天
function getCountDays(data) {
  let curDate = new Date(data)
  /* 获取当前月份 */
  let curMonth = curDate.getMonth();
  curDate.setMonth(curMonth + 1);
  /* 将日期设置为0 */
  curDate.setDate(0);
  /* 返回当月的天数 */
  return curDate.getDate()
}

/* 是否是可选时间范围 */
export function validateStartEnd(start,end) {

  if (!start || !end) {
    return false
  }

  let isTrue = true
  let startDate = new Date(start)
  let endDate = new Date(end)

  if (endDate.getTime() - startDate.getTime() <= 3600 * 1000 * 24 * 31) {
    if (endDate.getMonth() != startDate.getMonth()) {
      if (startDate.getDate() == getCountDays(start)) {
        getCountDays(end) <= endDate.getDate() ? isTrue = true : isTrue = false
      } else if (startDate.getDate() < endDate.getDate()) {
        isTrue = false
      }
    }
  } else {
    isTrue = false
  }

  return isTrue
}



