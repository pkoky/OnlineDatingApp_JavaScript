<template>
  <div class="flex flex-col items-center">
    <div>
      <img :src="user.picture.large" class="rounded-lg">
    </div>
    <div class="py-4">
      <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        <router-link :to="{name: 'Chat', params: {userId: `${user.login.uuid}`}}">
          MESSAGE
        </router-link>
      </button>
    </div>
    <table class="table-auto">
      <tbody>
        <tr>
          <td class="text-right pr-2">name :</td>
          <td class=""><span class="font-bold text-xl">{{ user.name.first + " " + user.name.last }}</span></td>
        </tr>
        <tr>
          <td class="text-right pr-2">gender :</td>
          <td><span class="font-bold text-xl">{{ user.gender }}</span></td>
        </tr>
        <tr>
          <td class="text-right pr-2">age :</td>
          <td><span class="font-bold text-xl">{{ user.registered.age }}</span></td>
        </tr>
        <tr>
          <td class="text-right pr-2">country :</td>
          <td><span class="font-bold text-xl">{{ user.location.country }}</span></td>
        </tr>
        <tr>
          <td class="text-right pr-2">state :</td>
          <td><span class="font-bold text-xl">{{ user.location.state }}</span></td>
        </tr>
        <tr>
          <td class="text-right pr-2">city :</td>
          <td><span class="font-bold text-xl">{{ user.location.city }}</span></td>
        </tr>
      </tbody>
      
    </table>
  </div>

</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default({
  created() {
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
