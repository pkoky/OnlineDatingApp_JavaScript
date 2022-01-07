<template>
  <div class="flex fustify-start text-left py-2">
    <div class="flex items-end bg-gray-600 rounded-lg p-1">
      <div class="pl-1 pr-3">
        {{msg['other']}}
      </div>
      <div class="text-xs pr-1">
        {{ sendDate }}
      </div>
    </div>
  </div>
  <div>
  </div>
</template>

<script>
import { getSendTime } from '@/methods/getSendDate.js';

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
      return getSendTime(date);
    }
  }
})
</script>
