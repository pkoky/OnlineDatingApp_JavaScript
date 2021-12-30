<template>
  <h1>chatvue!!!</h1>
  <h1>{{messages}}</h1>
  <div>
    <input type="text" v-model="message">
    <button @click="userSendMessage">send</button>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default ({
  name: 'Chat',
  data(){
    return{
      message: '',
    }
  },
  computed: {
    ...mapState({
      messages: function(state){
        return state.messages.messages;
      }
    })
  },
  methods: {
    id: function(){
      return this.$route.params.userId;
    },

    sendMessages: function(message){
      let id = this.id();
      let messageWithId = {};

      messageWithId[id] = message;
      this.$store.dispatch('messages/sendMessages', messageWithId);
      this.message = '';
    },

    userSendMessage: function(){
      let message = {'mine': this.message};
      this.sendMessages(message)
    },

    otherSendMessage: function(){

    }
  }
})
</script>
