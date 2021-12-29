<template>
  <div>
    <h1>userlistcomp</h1>
    <div v-for="user in users" :key="user.login.uuid">
      <router-link :to="{name:'UserShow', params: {userId: `${user.login.uuid}`}}">
        <div class="border">
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
  computed: {
    ...mapState({
      users: state => state.users.users
    }),
  },
})
</script>
