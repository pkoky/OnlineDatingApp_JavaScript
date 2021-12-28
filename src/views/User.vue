<template>
  <h1>users</h1>
  {{ id }}
  {{users}}
</template>

<script>
import { mapState } from 'vuex';

export default({
  data(){
    return {
      
    }
  },
  computed: {
    id: function(){
      return this.$route.params.id
    },
    ...mapState({
      users: state => state.users
    })
  }
})
</script>
