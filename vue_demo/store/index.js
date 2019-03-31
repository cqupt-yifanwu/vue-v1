import Vue from 'vue'
import Vuex from 'vuex'
import about from './modules/about'
import axios from 'axios'
import conf from '../conf/config'

const basePath = conf.endpoint;

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    about
  },
  state: {
    count: 0,
    isLogin: false,
    data: {}
  },
  mutations: {
    increment (state) {
      state.count++
    },
    checkLogin (state, {data}) {
      if (data && data.login) {
        state.isLogin = data.login
        return
      }
      state.isLogin = false;
    }
  },
  actions: {
    async checkLogin ({commit}) {
      const res = await axios.get(`${basePath}/login`)
      commit('checkLogin', res)
    }
  }
})

export default store
