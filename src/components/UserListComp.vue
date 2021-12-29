<template>
  <div>
    <div v-for="user in users" :key="user.login.uuid">
      <router-link :to="{name:'User', params: {userId: `${user.login.uuid}`}}">
        <div class="border">
          <img :src="user.picture.large" alt="">
          {{ user.name.first + " " + user.name.last }}
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default ({
  name: 'UserListComp',
  data(){
    return{
      userlist: {},
    }
  },
  created(){
    this.$store.dispatch('users/getUser');
  },
  computed: {
    ...mapState({
      users: state => state.users.users
    }),
  },
})
</script>
