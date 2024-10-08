import { defineStore } from "pinia";
export const useUserStore = defineStore({
  id: 'user',
  state: () => {   // 数据源
    return {
      userInfo: {
        name: '张三',
        age: 18,
        sex: 'boy'
      }
    }
  },
  actions: {
    //专门用来修改state
    changeUserName(name) {
      this.userInfo.name = name
    }
  },
  getters: {
    // 仓库中的计算属性
    afterAge(state) {
      return state.userInfo.age + 10
    }
  },
  persist: {
    enabled: true,
    strategies: [
      {
        paths: ['userInfo'],
        storage: localStorage
      }
    ]
  }
})