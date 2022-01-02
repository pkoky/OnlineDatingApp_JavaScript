<template>
  <ol>
    <li v-for="msg in messages[id()]" :key="msg">
      <div v-if="Object.keys(msg)[0] != 'mine'">
        <OtherComp :user="user" :msg="msg"></OtherComp>
      </div>
      <div v-else>
        <MineComp :msg="msg"></MineComp>
      </div>
    </li>
  </ol>
  <div>
    <input type="text" v-model="message" class="border">
    <button @click="userSendMessage">send</button>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import OtherComp from '@/components/OtherChatComp.vue';
import MineComp from '@/components/MineChatComp.vue';

export default ({
  name: 'Chat',
  data(){
    return{
      message: '',
    }
  },
  computed: {
    user: function(){
      return this.getUser(this.id())
    },
    ...mapState({
      messages: function(state){
        return state.messages.messages;
      }
    }),
    ...mapGetters({
      getUser: ('users/getUser')
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
      let date = new Date();
      let message = {'mine': this.message, 'date': date};
      this.sendMessages(message)
    },
  },
  components: {
    OtherComp,
    MineComp,
  }
})
</script>
