const url = 'https://randomuser.me/api/?results=10';
const mine = {name: {first:'kohei', last: 'ishida'}};

export const users = {
  namespaced: true,
  state: {
    users: {},
    mine: mine,
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
      return state.users[id];
    }
  }
}