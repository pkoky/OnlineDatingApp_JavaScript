<template>
  <h1>users</h1>
  <div>
    <img :src="user.picture.large">
  </div>
  <div>
    name:{{ user.name.first + " " + user.name.last }}
  </div>
  <div>
    gender:{{ user.gender }}
  </div>
  <div>
    age:{{ user.registered.age }}
  </div>
  <div>
    country:{{ user.location.country }}
  </div>
  <div>
    state:{{ user.location.state }}
  </div>
  <div>
    city:{{ user.location.city }}
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
