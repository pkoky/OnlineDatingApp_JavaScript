<template>
<div class="flex flex-col items-center flex-grow p-5 w-1/2 border">
  <div class="text-left">
    {{fullName}}
  </div>
  <ol class="">
    <li v-for="msg in messages[id()]" :key="msg">
      <div v-if="Object.keys(msg)[0] != 'mine'">
        <OtherComp :user="user" :msg="msg"></OtherComp>
      </div>
      <div v-else>
        <MineComp :msg="msg"></MineComp>
      </div>
    </li>
  </ol>
</div>
<div class="p-5">
  <input type="text" v-model="message" class="border">
  <button @click="userSendMessage" class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white px-2 border border-blue-500 hover:border-transparent rounded">send</button>
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
    fullName: function(){
      let user = this.user;
      let str = user.name.first + ' ' + user.name.last;
      return str;
    },

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
