import axios from 'axios';

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
        await axios.get('http://localhost:3000/getJson')
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
  