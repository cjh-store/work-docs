import { make } from 'vuex-pathify'
const state = () => ({
 userInfo:{
     name:'陈',
     age:18
 }
})

const mutations = {
  ...make.mutations(state),
}

const actions = {}
export default { state, mutations, actions, namespaced: true }