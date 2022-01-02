<template>
  <router-link :to="{name: 'Chat', params: {userId: `${user.login.uuid}`}}">
    <div class="flex">
        
      <img :src="user.picture.large" alt="">
      lastMsg: {{ lastMsg }}
      {{ Object.values(msg)[0] }}
    </div>
  </router-link>
    
</template>


<script>
import { mapGetters } from 'vuex';

export default ({
  props: {
    msg: Object,
  },
  computed: { 
    lastMsg: function(){
      let lastMsg = Object.values(this.msg)[0];
      let l = lastMsg.length;
      lastMsg = Object.values(lastMsg[l-1])
      return lastMsg[0];
    },
    user: function(){
      return this.getUser(Object.keys(this.msg));
    },
    ...mapGetters({
      getUser: ('users/getUser'),
    }),

  }
})
</script>
