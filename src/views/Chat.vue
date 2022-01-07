<template>
<div class="flex flex-col flex-grow text-white">
  <div class="flex items-center border mr-auto sticky top-0 bg-gray-900 bg-opacity-75 w-full py-2">
    <div class="px-2">
      <router-link :to="{name:'User', params: {userId: `${user.login.uuid}`}}">
        <h1><i class="fas fa-chevron-left fa-2x"></i></h1>
      </router-link>
    </div>
    <div class="flex items-center ml-5">
      <div>
        <img :src="user.picture.thumbnail" alt="" class="rounded-full h-10 w-10">
      </div>
      <div class="pl-3">
        {{fullName}}
      </div>
    </div>
  </div>
  <div class="flex flex-col items-center flex-grow px-2">
    <ol class="w-full">
      <li v-for="msg in messages[id()]" :key="msg">
        <div v-if="Object.keys(msg)[0] != 'mine'" class="">
          <OtherComp :user="user" :msg="msg"></OtherComp>
        </div>
        <div v-else class="">
          <MineComp :msg="msg"></MineComp>
        </div>
      </li>
    </ol>
  </div>
  <div class="p-2 sticky bottom-0 bg-gray-900 bg-opacity-75">
    <textarea type="text" v-model="message" class="border rounded-lg px-2 py-1 mr-2 bg-gray-500 bg-opacity-50"></textarea>
    <button @click="userSendMessage" class="bg-transparent hover:bg-blue-500 font-semibold hover:text-white px-2 border border-white hover:border-transparent rounded">send</button>
  </div>
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
      let optimizedMsg = this.message.split('\n').join('<br>')
      let message = {'mine': optimizedMsg, 'date': date};
      this.sendMessages(message)
    },
  },
  components: {
    OtherComp,
    MineComp,
  }
})
</script>
