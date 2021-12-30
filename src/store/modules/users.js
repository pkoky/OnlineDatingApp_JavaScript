const url = 'https://randomuser.me/api/?results=10';

export const users = {
  namespaced: true,
  state: {
    users: {},
  },
  mutations: {
    addUser: function(state, user){
      state.users[user.login.uuid] = user;
    }
  },
  actions: {
    getUser: function(context){
      fetch(url)
        .then(response => response.json())
        .then(function(data){
          let users = data.results;
          for (let user of users) {
            context.commit('addUser', user)
          }
        })
    }
  },
  getters: {
    getUser: (state) => (id) =>{
      console.log(state.users[id])
      return state.users[id];
    }
  }
}