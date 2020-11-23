import router from '../router'

/**
 * 获取地址栏参数
 * @param {String} name 要获取的参数名，若为空，将返回所有参数
 */
export function getUrlQuery (name = '') {
  const querys = {}
  location.search.substr(1)
    .split('&')
    .filter(i => i)
    .forEach(i => (querys[i.split('=')[0]] = i.split('=')[1]))
  return name ? querys[name] : querys
}

/**
 * 返回上一页
 */
export function back () {
  const from = getUrlQuery('from')
  if (from) {
    router.replace(decodeURIComponent(from))
  } else {
    router.back()
  }
}

export function toUrl (path = '') {
  this.$router.push({ path: path })
}
