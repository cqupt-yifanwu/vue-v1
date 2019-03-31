import axios from 'axios';
import conf from '../../conf/config'

const basePath = conf.endpoint;

const state = ()=>({
    initdata: {}
})
  
const mutations = {
    initPage(state, data) {
        console.log(data)
        state.initdata = data
    }
}

const actions = {
    async readMock ({commit}) {
        await axios.get(`${basePath}/getJson`)
            .then(res => {
                commit('initPage', res)
            });
    }
}


export default {
    namespaced: true,
    state,
    mutations,
    actions
}
  