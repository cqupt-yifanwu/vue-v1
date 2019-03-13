import axios from 'axios';

const state = ()=>({

})
  
const mutations = {
    setPosition(state, val) {
        state.position = val
    }
}

const actions = {
}


export default {
    namespaced: true,
    state,
    mutations,
    actions
}
  