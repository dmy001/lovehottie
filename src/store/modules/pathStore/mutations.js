const mutations = {
  setCurrentPath(state,payload){
    if(state.currentPath !== payload.path){
      state.currentPath = payload.path
    }
  }
}

export default mutations