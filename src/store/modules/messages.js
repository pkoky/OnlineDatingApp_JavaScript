import { createMsg, getRandomInt } from '@/methods/createMsg.js';

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
      let seconds = getRandomInt(10)*1000;
      setTimeout(() => { 
        let otherMsg = {};
        otherMsg = createMsg();        
        state.messages[key].push(otherMsg);
      }, seconds);
    }
  },
  actions: {
    sendMessages: function(context, message) {
      context.commit('addMessage', message)
    }
  },
  getters: {
    getMessageArr: function(state){
      let messageArr = [];
      for (let key in state.messages){
        let message = {};
        message[key] = state.messages[key];
        messageArr.push(message);
      }
      return messageArr;
    }
  }
}