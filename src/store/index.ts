import { createStore } from 'vuex'

export interface IState {
  count: number
}

const store = createStore({
  state(): IState {
    return {
      count: 0
    }
  },
  getters: {
    fullName(state: IState) {
      return `结果是：${state.count}`
    }
  },
  mutations: {
    add(state: IState, a = 1) {
      state.count = state.count + a
    }
  },
  devtools: true,
})

export default store