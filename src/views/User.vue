<template>
  <div>
    <img :src="user.picture.large">
  </div>
  <div>
    <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
      MESSAGE
    </button>
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
  created() {
    console.log(this.$route.params.userId)
  },
  computed: {
    id: function(){
      return this.$route.params.userId
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
