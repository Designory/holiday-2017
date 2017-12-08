import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  views: {
    limit: 2, // number of pages 3 => 0, 1, 2
    current: 0
  }
}

const mutations = {
  FORWARD (state) {
    state.views.current++;
  },
  BACK (state) {
    state.views.current--;
  }
}

const actions = {
  nextView({ commit }) {
    if (state.views.current < state.views.limit) {
      commit('FORWARD'); 
      window.history.pushState(state, `lorem`, `#${state.views.current}`)
    }
  },
  prevView({ commit }) {
    if (state.views.current > 0) {
      commit('BACK');
      window.history.pushState(state, `lorem`, `#${state.views.current}`)
    }
  }
}

const getters = {
  test: state => {
    return state.views.current;
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

console.log(store);
 
export default store
