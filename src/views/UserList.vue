<template>
  <div class="userIndex">
    <UserListComp></UserListComp>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import UserListComp from '@/components/UserListComp.vue';

export default {
  name: 'UserList',
  components: {
    UserListComp
  }
}
</script>
