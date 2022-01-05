<template>
  <div class="flex justify-start">
    <router-link :to="{name: 'User', params: {userId: `${user.login.uuid}`}}">
      <img :src="user.picture.thumbnail" alt="">
    </router-link>
    <div class="flex flex-col">
      <div>
        {{getFullName}}
      </div>
      <div class="">
        {{msg['other']}}
      </div>
      <div>
        {{ sendDate }}
      </div>
    </div>
  </div>
  <div>
  </div>
</template>

<script>
import { getSendDate } from '@/methods/getSendDate.js';

export default ({
  props: {
    user: Object,
    msg: Object,
  },
  computed: {
    getFullName(){
      return this.user.name.first + " " + this.user.name.last
    },
    sendDate(){
      let date = this.msg['date'];
      return getSendDate(date);
    }
  }
})
</script>
