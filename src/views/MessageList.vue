<template>
  <h1>messagelist.vue</h1>
  <div v-for="msg in messageArr" :key="msg">
    <LastMsgComp :msg="msg"></LastMsgComp>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import LastMsgComp from '@/components/LastMsgComp.vue';

export default ({
  computed: {
    ...mapGetters({
      messageArr: ('messages/getMessageArr')
    })
  },
  components: {
    LastMsgComp,
  }
})
</script>
