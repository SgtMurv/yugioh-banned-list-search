import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        bannedList: [],
    },
    mutations: {
        mutateBannedList(state, bannedList) {
            state.bannedList = bannedList
        },
    },
    actions: {
        async fetchBannedList(state) {
            console.log('Finish fetching data')
        },
    },
})
