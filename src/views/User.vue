<template>
  <h1>users</h1>
  <div>
    {{ user.name.first + " " + user.name.last }}
  </div>
  <div>
    {{ user.gender }}
  </div>
  <div>
    <img :src="user.picture.large">
  </div>

</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default({
  data(){
    return {
      
    }
  },
  created() {
  },
  computed: {
    id: function(){
      return this.$route.params.id
    },
    user: function(){
      return this.get(this.id)
    },
    ...mapState({
      users: state => state.users
    }),
    getUser: function(){
      return this.$store.getters['users/getUser']
    },
    ...mapGetters({
      get: ('users/getUser')
    }),
    
  }
})
</script>
