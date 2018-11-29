import Vue from 'vue'
import Vuex from 'vuex'
import About from './about'
import CONSTANT from '@/lib/Constant'
import dataO from './dataObject'

Vue.use(Vuex)
// 取出localStorage缓存的数据，key最好可以唯一标识，避免被其他应用的数据覆盖
const gshk_data = JSON.parse(localStorage.getItem('gshk_data'))
// 利用缓存数据模板对象生成一个新的数据缓存对象
const data = JSON.parse(JSON.stringify(dataO.data))

const store = new Vuex.Store({
	state () {
		return {
			//用户可以编辑修改data，优先使用localStorage的缓存数据
			data: gshk_data || data,
			//用户不可修改或者从后台一次性查询到的数据
			status: '0',  //开户状态
			book_status: 2,  //预约开户状态
			about: About,
			// 常量集
			CONSTANT: CONSTANT
		}
	},
	getters : {
		getStorage: function (state){
			if(!state.data){
				state.data = JSON.parse(localStorage.getItem('gshk_data'))
			}
			return state.data
		},
	},
	mutations: {
		$_setStorage ( state, value) {
			state.data = value
			localStorage.setItem('gshk_data', JSON.stringify(value))
			localStorage.setItem('cache_time', new Date().getTime())
		},
		$_removeStorage (state) {
			state.data = null
			localStorage.removeItem('gshk_data')
		}
	}
})

export default store
