function num(e) {
  return e < 10 ? '0' + e : e
}

/* 时间 格式化*/
export function dateTime(time, type) {
  let date
  let datatime = time.toString().split('.')[0]
  if (time.toString().indexOf('/') < 0 && time.toString().indexOf('-') < 0) {
    date = new Date(Number(time))
  } else {
    date = new Date(datatime.replace(/-/g, '/'))
  }

  const dateIndex = new Date(date),
    y = dateIndex.getFullYear() | '',
    m = dateIndex.getMonth() + 1 | '',
    d = dateIndex.getDate() | '',
    h = dateIndex.getHours() | '',
    mm = dateIndex.getMinutes() | '',
    s = dateIndex.getSeconds() | ''

  let backData

  if (type == 'date') {
    backData = `${y}-${num(m)}-${num(d)} ${num(h)}:${num(mm)}:${num(s)}`
  } else {
    backData = `${y}-${num(m)}-${num(d)}`
  }
  return backData
}

/* 不规则时间 格式化*/
export function irregularTime(time) {
  let newTime = time.split('');

  return `${newTime[0]}${newTime[1]}${newTime[2]}${newTime[3]}-${newTime[4]}${newTime[5]}-${newTime[6]}${newTime[7]}`
}

/* 人民币 格式化*/
export function NumFormat(s, n) {
  if (!s) {
    s = '0.00'
  }
  n = n > 0 && n <= 20 ? n : 2
  s = String(parseFloat(String(s).replace(/[^\d\.-]/g, '')).toFixed(n))
  let l = s.split('.')[0].split('').reverse(),
    r = s.split('.')[1],
    t = ''

  for (let i = 0; i < l.length; i++) {
    t += l[i] + ((i + 1) % 3 == 0 && i + 1 != l.length ? ',' : '')
  }
  const tt = t.split('').reverse().join('') + '.' + r

  return tt.replace(/-,/, '-')
}

/* 手机号掩码 前三后四*/
export function mobilePhoneMask(str) {
  return str.replace(/^(\d{3})\d{4}(\d+)/, '$1****$2')
}

/* 银行卡 尾号后四位*/
export function afterFourMask(str, type, name= '') {
  return (type ? '' : '尾号') + str.substring(str.length - 4) + (name ? `-${name}` : '')
}

/* 名称掩码 前2后2*/
export function mobileNameMask(str) {
  const reg = /^(.{2})(.*)(.{2})$/

  str = str.replace(reg, (a, b, c, d) => {
    let tt
    if (c.length> 4) {
      tt = b + '****' + d
    } else {
      tt = b + c.replace(/./g, '*') + d
    }
    return tt
  })
  return str
}

/* 手机号格式化*/
export function phoneMask(str) {
  return `${str.slice(0,3)} ${str.slice(3,7)} ${str.slice(7)}`
}

/* 数字 格式化*/
export function numberFormatter(nums, digits) {
  const si = [
    { value: 1E18, symbol: 'E' },
    { value: 1E15, symbol: 'P' },
    { value: 1E12, symbol: 'T' },
    { value: 1E9, symbol: 'G' },
    { value: 1E6, symbol: 'M' },
    { value: 1E3, symbol: 'k' }
  ]

  for (let i = 0; i < si.length; i++) {
    if (nums >= si[i].value) {
      return (nums / si[i].value + 0.1).toFixed(digits).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, '$1') + si[i].symbol
    }
  }
  return nums.toString()
}

/* 金额输入 只能输入数字和一个小数点 */
export function moneyFormatter(obj) {
  if (obj) {
    obj = obj.replace(/[^\d.]/g, '') // 先把非数字的都替换掉，除了数字和.
    obj = obj.replace(/^\./g, '') // 必须保证第一个为数字而不是.
    obj = obj.replace(/\.{2,}/g, '.') // 保证只有出现一个.而没有多个.
    obj = obj.replace('.', '$#$').replace(/\./g, '').replace('$#$', '.') // 保证.只出现一次，而不能出现两次以上
    return obj
  }
  return ''

}
