export const messages = {
  namespaced: true,
  state: {
    messages: {},
  },
  mutations: {
    addMessage: function(state, message){
      let key = Object.keys(message);
      if(!state.messages[key]){
        state.messages[key] = [];
      }
      state.messages[key].push(message[key]);
    }
  },
  actions: {
    sendMessages: function(context, message) {
      context.commit('addMessage', message)
    }
  },
  getters: {
    
  }
}