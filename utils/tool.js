/**
 * @description 所有方法统一添加 防止与lodash内方法重命名
 */

 let tool = {
   /**
    * 描述  获取文件后缀名
    * @param {String} filename
    */
   getExt(filename) {
     if (typeof filename == 'string') {
       return filename.split('.').pop().toLowerCase()
     } else {
       throw new Error('filename must be a string type')
     }
   },
 
   /**
    * 判断精准类型
    */
   typeOf(obj) {
     const toString = Object.prototype.toString
     const map = {
       '[object Boolean]': 'boolean',
       '[object Number]': isNaN(obj) ? 'NaN' : 'number',
       '[object String]': 'string',
       '[object Function]': 'function',
       '[object Array]': 'array',
       '[object Date]': 'date',
       '[object RegExp]': 'regExp',
       '[object Undefined]': 'undefined',
       '[object Null]': 'null',
       '[object Object]': 'object',
     }
     return map[toString.call(obj)]
   },
 
   /**
    * 判断是否为空  true带表空
    */
   isEmpty(a) {
     if (a === '') return true //检验空字符串
     if (a === 'null') return true //检验字符串类型的null
     if (a === 'undefined') return true //检验字符串类型的 undefined
     if (!a && a !== 0 && a !== '') return true //检验 undefined 和 null
     if (Array.prototype.isPrototypeOf(a) && a.length === 0) return true //检验空数组
     if (Object.prototype.isPrototypeOf(a) && Object.keys(a).length === 0)
       return true //检验空对象
     return false
   },
 
   /**
    * 描述 对象转字符串参数拼接
    */
   convertObj(data) {
     var _result = []
     for (var key in data) {
       var value = data[key]
       if (value.constructor == Array) {
         value.forEach(function (_value) {
           _result.push(key + '=' + _value)
         })
       } else {
         _result.push(key + '=' + value)
       }
     }
     return _result.join('&')
   },
 
   /**
    * @description 将url请求参数转为对象
    */
   paramObj(url) {
     const search = url.split('?')[1]
     if (!search) {
       return {}
     }
     return JSON.parse(
       '{"' +
         decodeURIComponent(search)
           .replace(/"/g, '\\"')
           .replace(/&/g, '","')
           .replace(/=/g, '":"')
           .replace(/\+/g, ' ') +
         '"}'
     )
   },
 }
 
 export default tool
 