<template>
  mineComp
  <div>
    {{ getFullName }}
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default ({
  computed: {
    ...mapState({
      mine: function(state){
        return state.users.mine
      }
    }),
    getFullName() {
      let name = this.mine.name;
      console.log(name)
      return name.first + ' ' + name.last;
    }
  }
})
</script>
