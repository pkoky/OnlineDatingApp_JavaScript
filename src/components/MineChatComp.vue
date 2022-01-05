<template>
  <div class="flex justify-end">
    <div class="flex flex-col">
      <div>
      </div>
      <div>
        {{ msg['mine'] }}
      </div>
      <div>
        {{ sendDate }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { getSendDate } from '@/methods/getSendDate.js';

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
      return getSendDate(date);
    }
  }
})
</script>
