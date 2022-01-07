<template>
  <div class="flex justify-end text-right py-2">
    <div class="flex items-end bg-green-600 rounded-lg p-1">
      <div class="pl-1 pr-3">
        {{ msg['mine'] }}
      </div>
      <div class="text-xs pr-1">
        {{ sendDate }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { getSendTime } from '@/methods/getSendDate.js';

export default ({
  props: {
    msg: Object,
  },
  computed: {
    ...mapState({
      mine: function(state){
        return state.users.mine
      }
    }),
    getFullName() {
      let name = this.mine.name;
      return name.first + ' ' + name.last;
    },
    sendDate(){
      let date = this.msg['date'];
      return getSendTime(date);
    }
  }
})
</script>
