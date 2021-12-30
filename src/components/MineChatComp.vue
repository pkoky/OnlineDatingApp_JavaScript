<template>
  <div class="flex justify-end">
    <div class="flex flex-col">
      <div>
        {{ getFullName }}
      </div>
      <div>
        {{ msg }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default ({
  props: {
    msg: String,
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
    }
  }
})
</script>
