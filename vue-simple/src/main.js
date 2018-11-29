// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'

// vue引用jquery相关文章https://www.cnblogs.com/hedeyong/p/7864842.html
//引入jquery bootstrap依赖jquery
import $ from 'jquery'
// 引入bootstrap3
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import store from '@/store'  // store模块
import DataCacheObject from '@/store/dataObject'  // 数据缓存对象模板 

// 适配方案
import 'lib-flexible'

import '@/sw'

// js功能扩展
import '@/lib/JS-Extend'

// 引入util
import util from '@/lib/util'

import axios from '@/lib/axios-hk'
// 挂在工具组件
Vue.prototype.$axios = axios
Vue.prototype.$util = util

// 缓存数据对象模板，用于重置缓存数据
Vue.prototype.$dataCacheObject = DataCacheObject.data 


console.log('当前地址：', location.href)
console.log('当前store:', store)

//import Vue from 'vue'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
