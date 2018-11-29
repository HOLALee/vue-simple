/**
 * util模块
 */

export default {
  deviceOptions:{},
  deviceParam:{},
  getUserMedia:(navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || (navigator.mediaDevices && navigator.mediaDevices.getUserMedia)||''),
  // getUserMedia:(navigator.getUserMedia || (navigator.mediaDevices && navigator.mediaDevices.getUserMedia)),
  isAndroid(){
    return navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Adr') > -1 //android终端
  },
  isIos(){
    return !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
  },
  isWeixin(){
    var ua = navigator.userAgent.toLowerCase();
    if(ua.match(/MicroMessenger/i)=="micromessenger") {
      return true//微信返回true
    }
    return false
  },
  formatDate (date,format) {
    if (typeof date == "string") {
        if (date.indexOf('-') > -1) {
            date= new Date(date.split('-')[0],date.split('-')[1]*1-1,date.split('-')[2]);
        }else if (date.indexOf('/') > -1) {
            date= new Date(date.split('/')[0],date.split('/')[1]*1-1,date.split('/')[2]);
        }else{
            date= new Date(date.substring(0,4),date.substring(4,6)*1-1,date.substring(6,8));
        }
    }
    var map = {
        "M": date.getMonth() + 1, //月份
        "d": date.getDate(), //日
        "h": date.getHours(), //小时
        "m": date.getMinutes(), //分
        "s": date.getSeconds(), //秒
        "q": Math.floor((date.getMonth() + 3) / 3), //季度
        "S": date.getMilliseconds() //毫秒
    };
    format = format.replace(/([yMdhmsqS])+/g, function(all, t){
        var v = map[t];
        if(v !== undefined){
            if(all.length > 1){
                v = '0' + v;
                v = v.substr(v.length-2);
            }
            return v;
        }
        else if(t === 'y'){
            return (date.getFullYear() + '').substr(4 - all.length);
        }
        return all;
    });
    return format;
  },
  padLeftZero (str) {
    return ('00'+str).substr(str.length)
  },
  /**
  * 从类似key=value&key1=value1串中获取参数
  * @param  {[type]} name [字段名]
  * @param  {[type]} str  [要解析的串]
  * @return {[type]}      [description]
  */
  getQueryString(name, str) { 
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
    var r = str.substr(1).match(reg); 
    if (r != null) return unescape(r[2]); 
          return ''; 
  },
}
