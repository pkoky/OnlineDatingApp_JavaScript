<template>
  <div class="userIndex">
    <div v-for="user in users" :key="user.login.uuid" >
      <router-link :to="`/user/${user.login.uuid}`" class="border">
        {{user.login.uuid}}
      </router-link>
    </div>
    <button class="border" @click="log">btn</button>
    <UserListComp></UserListComp>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { mapState } from 'vuex';
import UserListComp from '@/components/UserListComp.vue';

export default {
  name: 'UserList',
  computed: {
    ...mapState({
      users: state => state.users.users
    }),
  },
  components: {
    UserListComp
  }
}
</script>
