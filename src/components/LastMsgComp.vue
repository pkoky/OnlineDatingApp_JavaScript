<template>
  <router-link :to="{name: 'Chat', params: {userId: `${user.login.uuid}`}}">
    <div class="flex">
      <div>
        <img :src="user.picture.large" alt="">
      </div>
      <div>
        <div>
          {{ lastMsg }}
        </div>
        <div>
          {{ sendDate }}
        </div>
      </div>
    </div>
  </router-link>
    
</template>


<script>
import { mapGetters } from 'vuex';
import { getSendDate } from '@/methods/getSendDate.js';

export default ({
  props: {
    msg: Object,
  },
  computed: { 
    lastMsg: function(){
      return Object.values(this.lastMsgObj)[0]
    },

    lastMsgDate: function(){
      return Object.values(this.lastMsgObj)[1];
    },

     lastMsgObj: function(){
      let lastMsg = Object.values(this.msg)[0];
      let l = lastMsg.length;
      lastMsg = lastMsg[l-1]
      return lastMsg;
    },

    ...mapGetters({
      getUser: ('users/getUser'),
    }),

    sendDate: function(){
      return getSendDate(this.lastMsgDate);
    },

    user: function(){
      return this.getUser(Object.keys(this.msg));
    },
  }
})
</script>
